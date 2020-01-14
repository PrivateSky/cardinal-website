import Controller from "./Controller.js";

export default class FormController extends Controller {
    constructor(element) {
        super(element);

        this.__initDefaultFormListeners.call(this);

        // this.model = this.setModel({
        //     entities: [{
        //         entityChapter: {
        //             label: "Chapter 1"
        //         },
        //         name: {
        //             label: "Write down your name",
        //             name: "name",
        //             type: "text",
        //             required: true,
        //             placeholder: "Your name here...",
        //             value: ''
        //         },
        //         email: {
        //             label: "Write down your email address",
        //             name: "email",
        //             type: "email",
        //             required: true,
        //             placeholder: "Your email address here...",
        //             value: ''
        //         },
        //         gender: {
        //             label: "Select your gender",
        //             required: true,
        //             options: [{
        //                     label: "Male"
        //                 },
        //                 {
        //                     label: "Female",
        //                     value: "F"
        //                 }
        //             ]
        //         },
        //         nationality: {
        //             label: "Select your nationality",
        //             placeholder: "Please select one option...",
        //             required: true,
        //             options: [{
        //                 label: "Romanian",
        //                 value: "RO"
        //             }]
        //         },
        //         gdpr: {
        //             label: "Check if you agree with GDPR regulations",
        //             name: "gdpr",
        //             required: true,
        //             checkboxLabel: "GDPR Consent",
        //             checkedValue: "yes",
        //             uncheckedValue: "no"
        //         },
        //         terms: {
        //             label: "Do you accept our terms and conditions?",
        //             name: "terms",
        //             required: true,
        //             checkboxLabel: "Terms & Conditions",
        //             checkedValue: "yes",
        //             uncheckedValue: "no"
        //         }
        //     }, {
        //         entityChapter: {
        //             label: "Chapter 2"
        //         },
        //         name: {
        //             label: "Write down your name",
        //             name: "name",
        //             type: "text",
        //             required: true,
        //             placeholder: "Your name here...",
        //             value: ''
        //         },
        //         email: {
        //             label: "Write down your email address",
        //             name: "email",
        //             type: "email",
        //             required: true,
        //             placeholder: "Your email address here...",
        //             value: ''
        //         },
        //         gender: {
        //             label: "Select your gender",
        //             required: true,
        //             options: [{
        //                     label: "Male"
        //                 },
        //                 {
        //                     label: "Female",
        //                     value: "F"
        //                 }
        //             ]
        //         },
        //         nationality: {
        //             label: "Select your nationality",
        //             placeholder: "Please select one option...",
        //             required: true,
        //             options: [{
        //                 label: "Romanian",
        //                 value: "RO"
        //             }, {
        //                 label: "German",
        //                 value: "DE"
        //             }, {
        //                 label: "Italian"
        //             }]
        //         },
        //         gdpr: {
        //             label: "Check if you agree with GDPR regulations",
        //             name: "gdpr",
        //             required: true,
        //             checkboxLabel: "GDPR Consent",
        //             checkedValue: "yes",
        //             uncheckedValue: "no"
        //         },
        //         terms: {
        //             label: "Do you accept our terms and conditions?",
        //             name: "terms",
        //             required: true,
        //             checkboxLabel: "Terms & Conditions",
        //             checkedValue: "yes",
        //             uncheckedValue: "no"
        //         }
        //     }]
        // });

        this.model = this.setModel({
            entityChapter: {
                label: "Chapter 1"
            },
            name: {
                label: "Write down your name",
                name: "name",
                required: true,
                placeholder: "Your name here...",
                value: ''
            },
            email: {
                label: "Write down your email address",
                name: "email",
                required: true,
                placeholder: "Your email address here...",
                value: ''
            },
            age: {
                label: "Your age",
                name: "age",
                required: true,
                placeholder: "Your age here...",
                value: ''
            },
            dateOfBirth: {
                label: "Select from the calendar your birth date",
                name: "date-of-birth",
                required: true,
                value: ''
            },
            password: {
                label: "Write down your password.",
                hint: "The submition will create an account using your name and password.",
                name: "password",
                required: true,
                placeholder: "Password here...",
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
                }]
            },
            gdpr: {
                label: "Check if you agree with GDPR regulations",
                name: "gdpr",
                required: true,
                checkboxLabel: "GDPR Consent",
                checkedValue: "yes",
                uncheckedValue: "no"
            },
            terms: {
                label: "Do you accept our terms and conditions?",
                name: "terms",
                required: true,
                checkboxLabel: "Terms & Conditions",
                checkedValue: "yes",
                uncheckedValue: "no"
            }
        });

        document.dispatchEvent(new CustomEvent('modelReady', {
            bubbles: true,
            cancelable: true,
            composed: true
        }));
    }

    __initDefaultFormListeners() {
        this._element.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            console.log('{FormController.js} Form is listening for -=submit=-');
        }, true);

        this._element.addEventListener('reset', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            console.log('{FormController.js} Form is listening for -=reset=-');
        }, true);
    }
}