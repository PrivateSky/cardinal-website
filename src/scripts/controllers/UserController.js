import ApplicationController from './ApplicationController.js';

export default class UserController extends ApplicationController {

    constructor(element) {
        super(element);

        let _addModelListeners = (element) => {
            element.addEventListener("getModelEvent", (e) => {
                e.stopImmediatePropagation();
                let eventData = e.detail;
                let callback = eventData.callback;

                if (typeof callback === "function") {
                    if (eventData.bindValue && this.model[eventData.bindValue]) {
                        console.log(this.model[eventData.bindValue]);
                        return callback(null, this.model[eventData.bindValue])
                    }

                    if (!eventData.bindValue) {
                        return callback(null, this.model);
                    }
                }
                return callback(new Error("No callback provided"));
            })
        };

        _addModelListeners(element);
        this.user = {
            name: {
                label: "First Name",
                required: "true",
                firstname: "Raf", //should become value
                placeholder: "Enter your name here"
            },
            email: "raf@rms.ro",
            birthdate: {
                day: 1,
                year: 1988,
                month: {
                    name: "December",
                    number: 12
                }
            },
            accounts: ["account 1", "account 2"]
        };

        this.model = this.setModel(this.user);

        setTimeout(() => {

            this.model.onChange("*", (chain) => {
                console.log("Wildcard triggered: ", chain)
            });

            this.model.onChange("name", (chain) => {
                console.log("Chain with wildcard triggered: ", chain)
            });

            this.model.onChange("name.firstname", (chain) => {
                console.log("Chain with wildcard triggered: ", chain)
            });

            this.model.name.firstname = "Alexandru";
            this.model.name.required = true;


            setTimeout((() => {
                this.model.accounts.push("master account")
                console.log(this.model.accounts);
            }), 1000);

        }, 2000)
    }
}