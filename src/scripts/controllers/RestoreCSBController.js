export default class RestoreCSBController {

    wizardSteps = [{
        stepName: "FirstStep",
        stepIndex: 1,
        stepComponent: "psk-page-loader",
        stepCompleted: false,
        stepProperties: {pageUrl: "/pages/wizard/restore/init.html"}
    },
        {
            stepName: "SecondStep",
            stepIndex: 2,
            stepComponent: "psk-page-loader",
            stepCompleted: false,
            stepProperties: {pageUrl: "Hello"}
        },
        {
            stepName: "ThirdStep",
            stepIndex: 3,
            stepComponent: "psk-page-loader",
            stepCompleted: false,
            stepProperties: {pageUrl: "Hello"}
        }];

    provideConfiguration(event) {
        let callback = event.detail;

        if (typeof callback === "function") {
            callback(this.wizardSteps);
        } else {
            console.error("No callback was provided for needWizardConfiguration event");
        }
    }

    constructor(element) {
        console.log("RestoreCSBController created!");
        element.addEventListener("needWizardConfiguration", this.provideConfiguration.bind(this))
    }

    restoreCSB(seed) {
        console.log(seed);
        throw new Error("Not implemented")
    }

}