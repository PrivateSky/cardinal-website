export default class AbstractController {
    constructor(element) {
        this._element = element;
    }

    receive(eventName, callback) {
        if (!eventName || eventName.trim().length === 0) {
            return;
        }
        this._element.addEventListener(eventName, callback);
    }

    send(eventName, data) {
        if (!eventName || eventName.trim().length === 0 ||
            typeof this._element === 'undefined') {
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
        if(controller && typeof script === 'string' && script.trim().length > 0) {
            new Function('controller', script)(controller);
        }
        return null;
    }
}