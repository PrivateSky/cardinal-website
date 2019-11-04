import DefaultController from "./controllers/DefaultController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;
    ControllerFactory.registerController("DefaultController", DefaultController);
});

