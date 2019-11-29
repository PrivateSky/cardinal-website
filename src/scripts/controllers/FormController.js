import Controller from "./Controller.js";

export default class FormController extends Controller {
    constructor(element) {
        super(element);

        this.setState({
            components: [{
                    row: [{
                        componentName: "psk-input",
                        label: "Enter you name here",
                        type: "text",
                        required: true,
                        placeHolder: "Your name is..."
                    }],
                    rowType: "wide"
                },
                {
                    row: [{
                            componentName: "psk-input",
                            label: "Enter you email here",
                            type: "email",
                            required: false,
                            placeHolder: "Your name is..."
                        },
                        {
                            componentName: "psk-input",
                            label: "Enter you name here",
                            type: "password",
                            required: false,
                            placeHolder: "Your name is..."
                        },
                        {
                            componentName: "psk-input",
                            label: "Enter you name here",
                            type: "text",
                            defaultValue: "Guguta",
                            required: true,
                            placeHolder: "Your name is..."
                        }
                    ],
                    rowType: "normal"
                },
                {
                    row: [{
                        componentName: "psk-input",
                        label: "Enter you name here",
                        type: "text",
                        required: true,
                        placeHolder: "Your name is..."
                    }, {
                        componentName: "psk-checkbox",
                        label: "GRDP Consent"
                    }],
                    rowType: "normal"
                }
            ],
            actions: [{
                    actionName: "Reset Form",
                    actionType: "reset"
                },
                {
                    actionName: "Go for it",
                    actionType: "submit"
                }
            ]
        });

        this.bind({ model: this.getState() });
    }
}