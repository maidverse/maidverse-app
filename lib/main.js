"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const MaidverseAvatarsContract_1 = __importDefault(require("./contracts/MaidverseAvatarsContract"));
const Game_1 = __importDefault(require("./view/Game"));
const WebSocketClient_1 = __importDefault(require("./WebSocketClient"));
skyrouter_1.SkyRouter.route("**", Game_1.default);
const client = new WebSocketClient_1.default("wss://localhost:8079");
client.on("connect", () => {
    client.send("ping", "test", (result) => {
        console.log(result);
    });
    client.on("disconnect", () => {
        console.log("disconnected.");
    });
});
(async () => {
    console.log((await MaidverseAvatarsContract_1.default.totalSupply()).toString());
})();
if (sessionStorage.__spa_path) {
    skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
//# sourceMappingURL=main.js.map