"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
const Game_1 = __importDefault(require("../view/Game"));
class UserPanel extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.clickHandler = () => {
            this.panel?.delete();
        };
        this.changeCenter(180.5 / 2, -26.5 / 2);
        this.dom = (0, skynode_1.el)(".user-panel", (0, skynode_1.el)("a.profile", (0, skynode_1.el)("span", Game_1.default.current.discordUser?.username), (0, skynode_1.el)("img", { src: "/images/ui/profile.png", height: "32" }), { click: (event) => { this.showPanel(); event.stopPropagation(); } }));
        window.addEventListener("click", this.clickHandler);
    }
    showPanel() {
        this.panel?.delete();
        this.dom?.append(this.panel = (0, skynode_1.el)(".panel", (0, skynode_1.el)(".profile", (0, skynode_1.el)("span", Game_1.default.current.discordUser?.username), (0, skynode_1.el)("img", { src: "/images/ui/profile.png", height: "32" })), (0, skynode_1.el)("a.logout-button", "Logout", {
            click: async () => {
                Game_1.default.current.logoutFromDiscord();
                Wallet_1.default.disconnectFromWalletConnect();
                location.reload();
            },
        })));
        this.panel?.on("delete", () => this.panel = undefined);
    }
    delete() {
        window.removeEventListener("click", this.clickHandler);
        super.delete();
    }
}
exports.default = UserPanel;
//# sourceMappingURL=UserPanel.js.map