import {TENDER_CONTROLLER} from "../rivets/RivetsControllers.js";

export default class Controller {
    constructor(element) {
        this._element = element;
    }

    bind(data) {
        if (!data || !this._element) {
            return;
        }
        rivets.bind(this._element, {
            data: data,
            controller: TENDER_CONTROLLER
        });
    }

    setState(newState) {
        this._state = newState;
    }

    set model(_model) {
        let root = undefined;

        function makeSetter(parentChain) {
            return function (obj, prop, value) {
                if (typeof value === "object") {
                    obj[prop] = proxify(value, parentChain);
                } else {
                    obj[prop] = value;
                }

                root.notify(parentChain, prop);
            }
        }

        function proxify(obj, parentChain) {
            let isRoot = !parentChain;
            let notify, onChange;

            if (isRoot) {
                let observers = {};
                notify = function (parentChain, property) {

                    let changedChain = parentChain + "." + property;

                    function notifyChain(changedChain) {
                        let chain = observers[changedChain];
                        if (chain) {
                            chain.forEach(callback => {
                                callback();
                            });
                        }
                    }

                    notifyChain(changedChain);
                    notifyChain("*");
                };

                onChange = function (chain, callback) {
                    if (typeof callback === "function") {
                        if (!observers[chain]) {
                            observers[chain] = [];
                        }
                        observers[chain].push(callback);
                    }
                }
            }
            let setter = makeSetter(parentChain);

            return new Proxy(obj, {
                get: function (obj, prop) {
                    if(isRoot){
                        switch (prop) {
                            case "onChange":
                                return onChange;
                            case "notify":
                                return notify;
                        }
                    }

                    return obj[prop];
                },
                set: makeSetter(parentChain),

                deleteProperty: function (oTarget, sKey) {
                    delete oTarget[sKey];
                },

                ownKeys: function (oTarget) {
                    return oTarget.keys();
                },
                has: function (oTarget, sKey) {
                    return sKey in oTarget
                },
                defineProperty: function (oTarget, sKey, oDesc) {
                    let oDescClone = Object.assign({}, oDesc);
                    oDescClone.set = function (obj, prop, value) {
                        if (oDesc.hasOwnProperty("set")) {
                            oDesc.set(obj, prop, value);
                        }
                        setter(obj, prop, value);
                    };
                    return Object.defineProperty(oTarget, sKey, oDescClone);
                },
                getOwnPropertyDescriptor: function (oTarget, sKey) {
                    return Object.getOwnPropertyDescriptor(oTarget, sKey)
                }
            });
        }

        function proxifyArray(arr, parentChain) {
            new Proxy([], {
                get(target, prop) {
                    const val = target[prop];
                    if (typeof val === 'function') {
                        if (['push', 'unshift'].includes(prop)) {
                            return function (el) {
                                console.log('this is a array modification');
                                return Array.prototype[prop].apply(target, arguments);
                            }
                        }
                        if (['pop'].includes(prop)) {
                            return function () {
                                const el = Array.prototype[prop].apply(target, arguments);
                                console.log('this is a array modification');
                                return el;
                            }
                        }
                        return val.bind(target);
                    }
                    return val;
                }
            });
        }

        root = proxify(_model);
        this.model = root;
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