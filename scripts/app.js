import DefaultController from "./controllers/DefaultController.js";
import Controller from "./controllers/Controller.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;
    ControllerFactory.registerController("Controller", Controller);
    ControllerFactory.registerController("DefaultController", DefaultController);
});

rivets.binders.title = (el, value) => {
    if (el && value) {
        el.title = value;
    }
}

rivets.binders.id = (el, value) => {
    if (el && value) {
        el.id = value;
    }
}

rivets.binders.event = (el, value) => {
    if (el && value) {
        el.setAttribute('event-data', JSON.stringify(value));
    }
}

rivets.binders.remove = (el, removeIcon) => {
    if (removeIcon) {
        el.remove();
    }
}

rivets.formatters.eq = (value, compareToValue) => {
    return value === compareToValue;
}

rivets.formatters.neq = (initialValue, valueToCompare) => {
    return !(initialValue === valueToCompare);
}