import DefaultController from "./controllers/DefaultController.js";
import SomeController from "./controllers/SomeController.js";
import AbstractController from "./controllers/AbstractController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;
    ControllerFactory.registerController("AbstractController", AbstractController);
    ControllerFactory.registerController("DefaultController", DefaultController);
    ControllerFactory.registerController("SomeController", SomeController);
});