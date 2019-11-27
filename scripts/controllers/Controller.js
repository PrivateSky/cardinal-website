export default class Controller {
    constructor(element) {
        this._element = element;
    }

    bind(data) {
        if (!data || !this._element) {
            return;
        }
        rivets.bind(this._element, { data: data });
    }

    setState(newState) {
        this._state = newState;
    }

    getState() {
        return this._state;
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

    generateList(count) {
        let list = [];
        for (let index = 1; index <= count; ++index) {
            list.push({
                name: `Tender name ${index}`,
                active: Math.random() < 0.5,
                receiveNotification: Math.random() < 0.5,
                description: `This is a description for tender number ${index}`,
                startDate: new Date().toJSON().slice(0, 10)
            });
        }
        return list;
    };
}