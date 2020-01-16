const se = require("swarm-engine");

const ParentPowerCord = require("browser-server").powerCords.ParentPowerCord;

function SwarmsCommunication(identity){
    se.initialise(identity);

    let parentPC = new ParentPowerCord(window.parent);
    $$.swarmEngine.plug("*", parentPC);


    const SRPC = se.SmartRemoteChannelPowerCord;
    let swUrl = "http://localhost:8000/";
    const powerCord = new SRPC([swUrl]);

    $$.swarms.describe("echo", {
        say: function (message) {
            document.getElementById("parentMessage").innerText = message;

            setTimeout(() => {
                this.return(null, message);
            }, 2000);
        }
    });


    this.swInit = function(){
        if(!powerCord.identity)
        {
            $$.swarmEngine.plug("test/agent/agent007", powerCord);
        }

        let startMessage = "Echo";
        let sayEcho = (message)=>{
            $$.interactions.startSwarmAs("test/agent/agent007", "echo", "say", message)
                .onReturn(function(err, result){
                    if(!err){
                        console.log("Iframe received: ", result);
                        sayEcho(result+"o");
                    }
                });
        };
        sayEcho(startMessage);
    };
}


