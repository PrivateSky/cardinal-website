import BindableController from "./BindableController.js";

export default class DefaultFormController extends BindableController {
    constructor(element, model) {
        super(element);
        this.model = this.setModel(model);

        document.dispatchEvent(new CustomEvent('modelReady', {
            bubbles: true,
            cancelable: true,
            composed: true
        }));
    }
}