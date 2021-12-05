import { SkyRouter } from "skyrouter";
import MaidverseAvatarsContract from "./contracts/MaidverseAvatarsContract";
import Alert from "./ui/dialogue/Alert";
import Game from "./view/Game";
import WebSocketClient from "./WebSocketClient";

SkyRouter.route("**", Game);

const client = new WebSocketClient("wss://localhost:8079");
client.on("connect", async () => {
    client.send("ping", "test", (result: any) => {
        console.log(result);
    });
    client.on("disconnect", async () => {
        console.log("disconnected.");
    });
});

(async () => {
    console.log((await MaidverseAvatarsContract.totalSupply()).toString());
})();

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}