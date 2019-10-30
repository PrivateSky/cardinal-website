const configUrl = "app-config.json";
export default class DefaultController {


    constructor(element) {
        this.configIsLoaded = false;
        this.pendingRequests = [] ;

        this._getAppConfiguration(configUrl, (err, _configuration) => {

            this.configuration = this._prepareConfiguration(_configuration);

            this.configIsLoaded = true;
            while (this.pendingRequests.length) {
                let request = this.pendingRequests.pop();
                if(!this.configuration[request.configName]){
                    throw new Error(`Config ${request.configName} was not provided`)
                }
                request.callback(null, this.configuration[request.configName]);
            }
        });

        element.addEventListener("needMenuItems", this._provideConfig("menu"));
        element.addEventListener("getUserInfo", this._provideConfig("profile"));

    }


    _provideConfig(configName){
        return (e)=>{
            e.stopImmediatePropagation();
            let callback = e.detail;

            if (callback && typeof callback === "function") {
                if(this.configIsLoaded){
                    if(!this.configuration[configName]){
                        throw new Error(`Config ${configName} was not provided`)
                    }
                    callback(null, this.configuration[configName]);
                }
                else{
                    this.pendingRequests.push({configName:configName,callback:callback});
                }
            }
        }
    }

    _prepareConfiguration(rawConfig){

        let configuration = {};

        if(!rawConfig.basePagesUrl){
            throw new Error("Base url missing");
        }

        let basePagesUrl = rawConfig.basePagesUrl;

        if(!rawConfig.menu || !rawConfig.menu.defaultMenuConfig){
            throw new Error("Default menu configuration is missing");
        }

        let defaultMenuConfig = rawConfig.menu.defaultMenuConfig;

        if(rawConfig.profile){
            configuration.profile = rawConfig.profile;
        }



        let fillOptionalPageProps = function(navigationPages, pathPrefix){
            navigationPages.forEach(page => {

                if (!page.path) {
                    let pageName = page.name.toLowerCase();
                    let pagePath = pageName.toLowerCase().replace(/\s+/g, '-');
                    pagePath = pagePath.replace(/[:\/]/g, '');
                    page.path = pagePath;
                }

                if (pathPrefix) {
                    page.path = pathPrefix + "/" + page.path;
                } else {
                    if (page.path.indexOf("/") !== 0) {
                        page.path = "/" + page.path;
                    }
                }

                if (page.children) {
                    page.type = "abstract";
                    if (!page.icon) {
                        page.icon = defaultMenuConfig.icon;
                    }
                } else {
                    for (let prop in defaultMenuConfig) {
                        if (!page[prop]) {
                            page[prop] = defaultMenuConfig[prop];
                        }
                    }

                    if (page.component === "psk-page-loader") {
                        if (!page.componentProps) {
                            page.componentProps = {};
                        }
                        if (page.pageSrc) {
                            page.componentProps.pageUrl = basePagesUrl + page.pageSrc;
                        } else {

                            let filename = page.name.replace(/\s(.)/g, function($1) {
                                return $1.toUpperCase();
                            }).replace(/\s/g, '');

                            let prefix ="";
                            if(pathPrefix){
                                 prefix = pathPrefix.replace(/^\//, '');
                            }
                            page.componentProps.pageUrl = basePagesUrl + prefix + "/" + filename + ".html";
                        }
                    }
                }

                if (page.children) {
                    fillOptionalPageProps(page.children, page.path);
                }
            });
            return navigationPages
        };


        configuration.menu = fillOptionalPageProps(rawConfig.menu.pages);

        return configuration;

    }


    _getAppConfiguration(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status != 200) {
                callback(new Error(xhr.status.code));
            } else {
                let configuration = JSON.parse(xhr.responseText);
                callback(null, configuration)
            }
        };

        xhr.onerror = () => {
            callback(new Error("An error occurred"));
        };
        xhr.send();
    }
}