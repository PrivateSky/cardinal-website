import DefaultController from "./controllers/DefaultController.js";
import SomeController from "./controllers/SomeController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;
    ControllerFactory.registerController("DefaultController", DefaultController);
    ControllerFactory.registerController("SomeController", SomeController);
});