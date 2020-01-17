import DefaultController from "./controllers/DefaultController.js";
import Controller from "./controllers/Controller.js";
import FormController from "./controllers/FormController.js";
import TestFormController from "./controllers/test-controllers/TestFormController.js";
import TestFormForEachController from "./controllers/test-controllers/TestFormForEachController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    ControllerFactory.registerController("Controller", Controller);
    ControllerFactory.registerController("FormController", FormController);
    ControllerFactory.registerController("DefaultController", DefaultController);
    ControllerFactory.registerController("TestFormController", TestFormController);
    ControllerFactory.registerController("TestFormForEachController", TestFormForEachController);
});