// import DefaultController from "./controllers/DefaultController.js";
// import Controller from "./controllers/Controller.js";
// import FormController from "./controllers/FormController.js";
// import UserController from "./controllers/UserController.js";
// import TestFormController from "./controllers/test-controllers/TestFormController.js";


document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    // ControllerFactory.registerController("Controller", Controller);
    // ControllerFactory.registerController("FormController", FormController);
    // ControllerFactory.registerController("DefaultController", DefaultController);
    // ControllerFactory.registerController("UserController", UserController);
    // ControllerFactory.registerController("TestFormController", TestFormController);


});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw-root.js', {scope: "/SSApps"}).then(function(reg) {
        console.log('Yay, service worker is live!', reg);
    }).catch(function(err) {
        console.log('No oats for you.', err);
    });
}