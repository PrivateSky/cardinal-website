export default class SeedController {

    seedChanged(e) {
        this.seed = e.target.value;
    }

    restoreCSB(event) {

        if (event.data && typeof event.data.callback === "function") {
            let callback = event.data;

            let initializeBootScript = require("boot-host").initializeBootScript;
            initializeBootScript(this.seed);
        }
        else {
            console.log("No callback provided for restoreCSB event")
        }



    }

    constructor(element) {
        console.log("SeedController initialized");
        this.element = element;
        let seedInputElement = this.element.querySelector("#seed-text");
        seedInputElement.addEventListener("input", this.seedChanged.bind(this));
        document.addEventListener("restoreCSB", this.restoreCSB.bind(this))
    }

}


