import DefaultController from "./controllers/DefaultController.js";
import Controller from "./controllers/Controller.js";
import FormController from "./controllers/FormController.js";
import UserController from "./controllers/UserController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    ControllerFactory.registerController("Controller", Controller);
    ControllerFactory.registerController("FormController", FormController);
    ControllerFactory.registerController("DefaultController", DefaultController);
    ControllerFactory.registerController("UserController", UserController);
});