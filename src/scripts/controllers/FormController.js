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
                        label: "GRDP Consent",
                        checkboxLabel: "Label for checkbox"
                    }, {
                        componentName: "psk-radio",
                        label: "Choose only one. Choose wisely",
                        options: "Romania | Italia | Franta"
                    }],
                    rowType: "normal"
                }, {
                    row: [{
                        componentName: "psk-radio",
                        label: "Choose only one. Choose wisely",
                        options: [{
                                label: "Romanica Mare"
                            },
                            {
                                label: "Frantuzica Mica",
                                name: "framica"
                            },
                            {
                                label: "Italia de pe Marte",
                                name: "martinica"
                            }
                        ]
                    }],
                    rowType: 'wide'
                }, {
                    row: [{
                        componentName: "psk-select",
                        label: "Choose wisely.",
                        selectionType: "single",
                        options: [{
                                label: "Romanica Mare"
                            },
                            {
                                label: "Frantuzica Mica",
                                name: "framica"
                            },
                            {
                                label: "Italia de pe Marte",
                                name: "martinica"
                            }
                        ]
                    }, {
                        componentName: "psk-select",
                        label: "Choose only one.",
                        selectionType: "multiple",
                        options: [{
                                label: "Romanica Mare"
                            },
                            {
                                label: "Frantuzica Mica",
                                name: "framica"
                            },
                            {
                                label: "Italia de pe Marte",
                                name: "martinica"
                            }
                        ]
                    }, {
                        componentName: "psk-select",
                        label: "Choose only one.",
                        selectionType: "di' cari-o vrut calculatoru'",
                        options: [{
                                label: "Romanica Mare"
                            },
                            {
                                label: "Frantuzica Mica",
                                name: "framica"
                            },
                            {
                                label: "Italia de pe Marte",
                                name: "martinica"
                            }
                        ]
                    }],
                    rowType: 'normal'
                }
            ],
            actions: [{
                    name: "Reset Form",
                    type: "reset"
                },
                {
                    name: "Go for it",
                    type: "submit"
                }
            ]
        });

        this.bind({ model: this.getState() });
    }
}