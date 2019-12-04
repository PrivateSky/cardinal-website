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

    setModel(_model) {
        let root = undefined;

        function makeChain(parentChain, currentChain) {
            return parentChain ? parentChain + "." + currentChain : currentChain
        }

        function makeSetter(parentChain) {
            return function (obj, prop, value) {
                let chain = makeChain(parentChain, prop);
                switch (typeof value) {
                    case "object":
                        if (Array.isArray(value)) {
                            obj[prop] = proxifyArray(value, chain);
                        } else {
                            obj[prop] = proxify(value, chain);
                        }
                        proxifyNestedObjects(obj[prop]);
                        break;
                    default:
                        obj[prop] = value;
                }

                root.notify(parentChain, prop);
                return true;
            }
        }

        function proxifyNestedObjects(obj) {
            for (let prop in obj) {
                if (typeof obj[prop] === "object") {
                    obj[prop] = obj[prop];
                    proxifyNestedObjects(obj[prop]);
                }
            }
        }

        function proxify(obj, parentChain) {
            let isRoot = !parentChain;
            let notify, onChange;
            if (isRoot) {
                let observers = {};
                notify = function (parentChain, property) {
                    let changedChain = property;
                    if (parentChain) {
                        changedChain = parentChain + "." + changedChain;
                    }

                    function notifyChain(queryChain) {
                        let chain = observers[queryChain];
                        if (chain) {
                            chain.forEach(callback => {
                                callback(changedChain);
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
                    if (isRoot) {
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
                    return Object.keys(oTarget);
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
        proxifyNestedObjects(root);
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