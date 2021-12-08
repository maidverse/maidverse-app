"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
const Game_1 = __importDefault(require("../view/Game"));
class Enter extends skyengine_1.GameNode {
    constructor(discordAuthed) {
        super(0, 0);
        this.steps = 0;
        this.connectWalletHandler = async () => {
            this.showWalletAddress();
        };
        this.dom = (0, skynode_1.el)(".enter", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "Welcome"), (0, skynode_1.el)("p", "Discord login is required to enter Maidverse.")), this.content = (0, skynode_1.el)(".content"), (0, skynode_1.el)("footer", this.continueButton = (0, skynode_1.el)("a.continue-button", "Continue", {
            click: async () => {
                if (this.steps === 1) {
                    this.showConnectWallet();
                }
                if (this.steps === 3) {
                    this.delete();
                    const address = await Wallet_1.default.loadAddress();
                    Game_1.default.current.loadUserPanel(address);
                }
            },
        }), (0, skynode_1.el)(".dots", this.dot1 = (0, skynode_1.el)(".dot"), this.dot2 = (0, skynode_1.el)(".dot"))));
        discordAuthed === true ? this.showDiscordAccount() : this.showDiscordLogin();
    }
    showDiscordLogin() {
        this.content.empty().append((0, skynode_1.el)("a.discord-login-button", "Login with Discord", {
            href: `https://discord.com/api/oauth2/authorize?client_id=915530011212144661&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}`)}&response_type=code&scope=identify`,
        }));
        this.steps = 0;
        this.continueButton.addClass("off");
        this.dot1.addClass("on");
        this.dot2.deleteClass("on");
    }
    showDiscordAccount() {
        this.content.empty().append((0, skynode_1.el)(".discord-user", Game_1.default.current.discordUser?.username));
        this.steps = 1;
        this.continueButton.deleteClass("off");
        this.dot1.addClass("on");
        this.dot2.deleteClass("on");
    }
    showConnectWallet() {
        this.content.empty().append((0, skynode_1.el)("a.connect-wallet-button", "Connect Wallet", {
            click: () => Wallet_1.default.connect(),
        }));
        Wallet_1.default.on("connect", this.connectWalletHandler);
        this.steps = 2;
        this.continueButton.addClass("off");
        this.dot1.deleteClass("on");
        this.dot2.addClass("on");
    }
    async showWalletAddress() {
        const address = await Wallet_1.default.loadAddress();
        this.content.empty().append((0, skynode_1.el)(".address", CommonUtil_1.default.shortenAddress(address === undefined ? "" : address)));
        this.steps = 3;
        this.continueButton.deleteClass("off");
        this.dot1.deleteClass("on");
        this.dot2.addClass("on");
    }
    delete() {
        Wallet_1.default.off("connect", this.connectWalletHandler);
        super.delete();
    }
}
exports.default = Enter;
//# sourceMappingURL=Enter.js.map