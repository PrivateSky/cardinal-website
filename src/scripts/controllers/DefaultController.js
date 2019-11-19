const configUrl = "/app-config.json";
export default class DefaultController {


    constructor(element) {
        this.configIsLoaded = false;
        this.pendingRequests = [];

        this._getAppConfiguration(configUrl, (err, _configuration) => {

            this.configuration = this._prepareConfiguration(_configuration);
            this.configIsLoaded = true;
            while (this.pendingRequests.length) {
                let request = this.pendingRequests.pop();
                if (!this.configuration[request.configName]) {
                    throw new Error(`Config ${request.configName} was not provided`)
                }
                request.callback(null, this.configuration[request.configName]);
            }
        });

        element.addEventListener("needMenuItems", this._provideConfig("menu"));
        element.addEventListener("getUserInfo", this._provideConfig("profile"));
        element.addEventListener("getHistoryType", this._provideConfig("historyType"));
        element.addEventListener("validateUrl", (e) => {
            e.stopImmediatePropagation();
            let {sourceUrl, callback} = e.detail;
            if (callback && typeof callback === "function") {
                this._parseSourceUrl(sourceUrl, callback);
            } else {
                console.error("Callback was not properly provided!");
            }
        });
    }

    _provideConfig(configName) {
        return (e) => {
            e.stopImmediatePropagation();
            let callback = e.detail;

            if (callback && typeof callback === "function") {
                if (this.configIsLoaded) {
                    if (!this.configuration[configName]) {
                        throw new Error(`Config ${configName} was not provided`)
                    }
                    callback(null, this.configuration[configName]);
                } else {
                    this.pendingRequests.push({configName: configName, callback: callback});
                }
            }
        }
    }

    _prepareConfiguration(rawConfig) {

        let configuration = {};

        if (!rawConfig.basePagesUrl) {
            throw new Error("Base url missing");
        }

        let basePagesUrl = rawConfig.basePagesUrl;

        if (!rawConfig.menu || !rawConfig.menu.defaultMenuConfig) {
            throw new Error("Default menu configuration is missing");
        }

        let defaultMenuConfig = rawConfig.menu.defaultMenuConfig;

        if (rawConfig.profile) {
            configuration.profile = rawConfig.profile;
        }


        let fillOptionalPageProps = function (navigationPages, pathPrefix) {
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
                            let filename = page.name.replace(/[:.!?]/g,"").replace(/\s/g, '-').toLowerCase();

                            let prefix = "";
                            if (pathPrefix) {
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

        configuration.historyType = "browser";
        let historyType = rawConfig.menu.defaultMenuConfig.historyType;
        if (historyType === "hash" ||
            historyType === "query") {
            configuration.historyType = historyType;
        }

        if (historyType === "query") {
            let pagePrefix = "?";
            if (rawConfig.menu.defaultMenuConfig.pagePrefix) {
                pagePrefix = rawConfig.menu.defaultMenuConfig.pagePrefix;
            }
            let addPathPrefix = function (pages) {
                pages.forEach(page => {
                    let pagePath = page.path;
                    if (pagePath.indexOf("/") === 0) {
                        pagePath = pagePath.substr(1);
                    }
                    page.path = `${pagePrefix}${pagePath}`;
                    if (page.children) {
                        addPathPrefix(page.children);
                    }
                });
            };
            addPathPrefix(configuration.menu);
        }

        configuration.pagesHierarchy = this._prepareMenuTree(configuration.menu, historyType);
        return configuration;
    }

    _prepareMenuTree(menuPages, historyType) {
        let leafSearch = function (menu) {
            let tree = {};
            menu.forEach((leaf) => {
                let pageName = leaf.name.replace(/(\s+)/g, '').toLowerCase();

                if (!tree[pageName]) {
                    let leafPath = leaf.path;
                    switch (historyType) {
                        case "browser":
                        case "query":
                            leafPath = leaf.path;
                            break;
                        case "hash":
                            leafPath = "/#" + leaf.path;
                            break;
                    }
                    tree[pageName] = {
                        path: leafPath
                    };
                }

                if (leaf.children) {
                    tree[pageName].children = leafSearch(leaf.children);
                }
            });
            return tree;
        };

        return leafSearch(menuPages);
    }

    _parseSourceUrl(sourceUrl, callback) {
        sourceUrl = sourceUrl.replace(/(\s+)/g, '').toLowerCase();
        let paths = sourceUrl.split("/");

        let root = this.configuration.pagesHierarchy;
        for (let i = 0; i < paths.length; i++) {
            if (!root[paths[i]]) {
                return callback(`${sourceUrl} is not a valid path in the application!`);
            }

            if (root[paths[i]].children && i !== paths.length) {
                root = root[paths[i]].children;
                continue;
            }
            return callback(null, root[paths[i]].path)
        }
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
