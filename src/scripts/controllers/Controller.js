import BaseController from "./BaseController.js";
export default class Controller extends BaseController{
    constructor(element) {
        super(element);
    }
    receive(eventName, callback) {
        if (!eventName || eventName.trim().length === 0 ||
            !callback || typeof callback !== 'function' ||
            !this._element || !this._element.addEventListener) {
            return;
        }
        this._element.addEventListener(eventName, callback);
    }

    send(eventName, data) {
        if (!eventName || eventName.trim().length === 0 || !this._element ||
            !this._element || !this._element.dispatchEvent) {
            return;
        }

        this._element.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: data
        }));
    }

    executeScript(controller, script) {
        if (controller && typeof script === 'string' && script.trim().length > 0) {
            new Function('controller', script)(controller);
        }
        return null;
    }
}