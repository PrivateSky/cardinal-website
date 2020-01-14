const se = require("swarm-engine");
const ParentPowerCord = se.ParentPowerCord;

se.initialise("*");

$$.swarms.describe("echo", {
    say: function (message) {
        document.getElementById("parentMessage").innerText = message;
        setTimeout(() => {
            this.return(null, message);
        }, 2000);
    }
});

/*
*  InnerServiceWorkerPowerCord in functia de sendSwarm verifica SwarmTargetul din header
*  si daca este de tip URL trebuie sa puna in canalul extrax din swarmTarget
* */
let pc = new ParentPowerCord(window.parent);

$$.swarmEngine.plug("*", pc);