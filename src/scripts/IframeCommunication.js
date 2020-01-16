function IframeCommunication() {
    let se, IframePC;
    let connectedPCs = {};

    if (typeof $$.swarmEngine === "undefined") {
        se = require("swarm-engine");
        se.initialise("parent");
        IframePC = require("browser-server").powerCords.IframePowerCord;

        $$.swarms.describe("pin", {
            enter: function(){
                setTimeout(()=>{
                    this.return(null, 1234);
                },2000);

            }
        });

    }


    this.initializeSwarmEngine = function (identity, iframe) {
        const powerCord = new IframePC(iframe);
        connectedPCs[identity] = {powerCord, iframe};
        $$.swarmEngine.plug(identity, powerCord);

        const powerCordToParent = new IframePC(iframe);
        $$.swarmEngine.plug("*", powerCordToParent);

    }
}

let iframeCommunicationInstance = new IframeCommunication();

let getIframeCommunicationInstance = function () {
    return iframeCommunicationInstance;
};

export {getIframeCommunicationInstance};





