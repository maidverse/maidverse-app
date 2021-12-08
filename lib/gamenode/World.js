"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const Config_1 = __importDefault(require("../Config"));
const Game_1 = __importDefault(require("../view/Game"));
const WebSocketClient_1 = __importDefault(require("../WebSocketClient"));
const Avatar_1 = __importDefault(require("./Avatar"));
const Map_1 = __importDefault(require("./Map"));
class World extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.client = new WebSocketClient_1.default(`wss://${Config_1.default.backendHost}`);
        this.avatars = {};
        this.append(new Map_1.default());
        this.client.on("connect", () => { this.loadAvatars(); this.fireEvent("connect"); });
        this.client.on("enterAvatar", (address, userAvatar) => this.enterAvatar(address, userAvatar));
        this.client.on("exitAvatar", (address) => this.exitAvatar(address));
        this.client.on("moveAvatar", (address, x, y) => this.moveAvatar(address, x, y));
        this.client.on("message", (address, message) => this.showMessage(address, message));
        this.client.on("disconnect", () => {
            console.log("disconnected.");
            this.client.reconnect();
        });
    }
    async enter(address) {
        if (Game_1.default.current.discordUser !== undefined) {
            this.walletAddress = address;
            const userAvatar = await this.client.send("enter", address, Game_1.default.current.discordUser.id);
            const avatar = this.enterAvatar(address, userAvatar);
            Game_1.default.current.screen.camera.target = avatar;
        }
    }
    createAvatar(address, userAvatar) {
        this.avatars[address]?.delete();
        const avatar = new Avatar_1.default(userAvatar).appendTo(this);
        ;
        this.avatars[address] = avatar;
        return avatar;
    }
    clear() {
        for (const avatar of Object.values(this.avatars)) {
            avatar.delete();
        }
        this.avatars = {};
    }
    async loadAvatars() {
        this.clear();
        const avatars = await this.client.send("loadAvatars");
        for (const [address, userAvatar] of Object.entries(avatars)) {
            this.createAvatar(address, userAvatar);
        }
    }
    enterAvatar(address, userAvatar) {
        const avatar = this.createAvatar(address, userAvatar);
        avatar.birth();
        return avatar;
    }
    exitAvatar(address) {
        const avatar = this.avatars[address];
        avatar?.delete();
    }
    moveAvatar(address, x, y) {
        const avatar = this.avatars[address];
        avatar?.moveTo(x, y);
    }
    moveOrder(x, y) {
        if (this.walletAddress !== undefined) {
            this.client.send("moveAvatar", x, y);
            this.moveAvatar(this.walletAddress, x, y);
        }
    }
    showMessage(address, message) {
        const avatar = this.avatars[address];
        avatar.showMessage(message);
    }
    sendMessage(message) {
        if (this.walletAddress !== undefined) {
            this.client.send("sendMessage", message);
            this.showMessage(this.walletAddress, message);
        }
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map