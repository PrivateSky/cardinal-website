import DefaultApplicationController from "./controllers/DefaultApplicationController.js";
import TestFormController from "./controllers/test-controllers/TestFormController.js";
import TestFormForEachController from "./controllers/test-controllers/TestFormForEachController.js";
import ApplicationController from "./controllers/ApplicationController.js";
import DefaultFormController from "./controllers/DefaultFormController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    ControllerFactory.registerController("ApplicationController", ApplicationController);
    ControllerFactory.registerController("DefaultFormController", DefaultFormController);
    ControllerFactory.registerController("DefaultApplicationController", DefaultApplicationController);
    ControllerFactory.registerController("TestFormController", TestFormController);
    ControllerFactory.registerController("TestFormForEachController", TestFormForEachController);
});