const fs = require("fs");
const path = require("path");
const appConfig = "./src/app-config.json";
import AppConfigurationHelper from "../release/cardinal/controllers/AppConfigurationHelper.js";


let buildSiteMap = function() {

    let readFileData = function(pageStructureUrl, callback) {
        fs.readFile(path.resolve(pageStructureUrl), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(JSON.parse(data));
            }
        })
    }

    readFileData(appConfig, function(globalNavigation) {
        let configuration = AppConfigurationHelper._prepareConfiguration(globalNavigation);

        let siteMap = "";
        let historyType = configuration.historyType;
        let realBase = configuration.baseUrl;

        switch (historyType) {
            case "query":
                realBase = `${realBase}/`;
                break;
            case "hash":
                realBase = `${realBase}/#`;
                break;
        }

        let buildXMLTag = function(websitePages) {

            websitePages.forEach(page => {

                if (page.type !== "abstract") {
                    siteMap += `<url>
        <loc>${realBase}${page.path}</loc>
      </url>`;
                }

                if (typeof page.children === 'object' && page.children.type ==="known" && Array.isArray(page.children.items)) {
                    buildXMLTag(page.children.items)
                }
            });
        };

        buildXMLTag(configuration.menu);


        siteMap = `<?xml version="1.0" encoding="UTF-8"?>
                 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                 ${siteMap}
                 </urlset>`;
        fs.writeFile("./src/sitemap.xml", siteMap, function(err) {
            if (err) {
                console.log("An error occurred while generating the sitemap");
            } else {
                console.log("Sitemap was successfully generated");
            }

        })
    })
};

buildSiteMap();
