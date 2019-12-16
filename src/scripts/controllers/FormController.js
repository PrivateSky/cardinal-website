import Controller from "./Controller.js";

export default class FormController extends Controller {
    constructor(element) {
        super(element);

        this.__initDefaultFormListeners.call(this);

        this.model = this.setModel({
            name: {
                label: "Write down your name",
                name: "name",
                type: "text",
                required: true,
                placeholder: "Your name here...",
                value: ''
            },
            email: {
                label: "Write down your email address",
                name: "email",
                type: "email",
                required: true,
                placeholder: "Your email address here...",
                value: ''
            },
            gender: {
                label: "Select your gender",
                required: true,
                options: [{
                        label: "Male"
                    },
                    {
                        label: "Female",
                        value: "F"
                    }
                ]
            },
            nationality: {
                label: "Select your nationality",
                placeholder: "Please select one option...",
                required: true,
                options: [{
                    label: "Romanian",
                    value: "RO"
                }, {
                    label: "German",
                    value: "DE"
                }, {
                    label: "Italian"
                }]
            }
        });

        const modelReadyEvent = new CustomEvent('modelReady', {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this.model
        });

        document.dispatchEvent(modelReadyEvent);
    }

    __initDefaultFormListeners() {
        document.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            Object.keys(this.model).forEach(key => {
                console.log('Key: ', key, 'Completed value: ', this.model[key].value);
            });
        });
    }
}