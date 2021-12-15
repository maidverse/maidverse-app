"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Game_1 = __importDefault(require("../view/Game"));
class ChatHistory extends skynode_1.DomNode {
    constructor() {
        super(".chat-history");
        this.init(Game_1.default.current.world.discordMessages);
        Game_1.default.current.world.on("loadDiscordMessages", () => {
            this.init(Game_1.default.current.world.discordMessages);
        });
        Game_1.default.current.world.on("discordMessage", (message) => {
            this.add(message);
            this.domElement.scrollTo(0, 999999);
        });
    }
    add(message) {
        const index = message.indexOf(":");
        this.append((0, skynode_1.el)(".message", (0, skynode_1.el)("span.who", `${message.substring(0, index)} :`), (0, skynode_1.el)("span.text", message.substring(index + 2))));
        if (this.children.length > 50) {
            this.children[0].delete();
        }
    }
    init(messages) {
        for (const message of messages) {
            this.add(message);
        }
        setTimeout(() => this.domElement.scrollTo(0, 999999));
    }
    hide() {
        this.style({ display: "none" });
    }
    show() {
        this.style({ display: "block" });
        this.domElement.scrollTo(0, 999999);
    }
}
exports.default = ChatHistory;
//# sourceMappingURL=ChatHistory.js.map