function IframeCommunication() {
    let se, IframePC;
    let connectedPCs = {};


    this.initializeSwarmEngine = function (identity, iframe) {
        if (typeof $$.swarmEngine === "undefined") {
            se = require("swarm-engine");
            se.initialise();
            IframePC = se.IframePowerCord;
        }
        const powerCord = new IframePC(iframe);
        connectedPCs[identity] = {powerCord, iframe};
        $$.swarmEngine.plug("test/agent/agent007", powerCord);
    }
}

let iframeCommunicationInstance = new IframeCommunication();

let getIframeCommunicationInstance = function () {
    return iframeCommunicationInstance;
};

export {getIframeCommunicationInstance};





