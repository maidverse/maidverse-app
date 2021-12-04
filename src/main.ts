import { SkyRouter } from "skyrouter";
import MaidverseAvatarsContract from "./contracts/MaidverseAvatarsContract";
import Game from "./view/Game";
import WebSocketClient from "./WebSocketClient";

SkyRouter.route("**", Game);

const client = new WebSocketClient("wss://localhost:8079");
client.on("connect", () => {
    client.send("ping", "test", (result: any) => {
        console.log(result);
    });
    client.on("disconnect", () => {
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