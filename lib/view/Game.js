"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const superagent_1 = __importDefault(require("superagent"));
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
const World_1 = __importDefault(require("../gamenode/World"));
const Store_1 = __importDefault(require("../Store"));
const BottomBar_1 = __importDefault(require("../ui/BottomBar"));
const Enter_1 = __importDefault(require("../ui/Enter"));
const InitMaid_1 = __importDefault(require("../ui/InitMaid"));
const SocialPanel_1 = __importDefault(require("../ui/SocialPanel"));
const UserPanel_1 = __importDefault(require("../ui/UserPanel"));
class Game {
    constructor() {
        this.codeStore = new Store_1.default("codeStore");
        this.repositeUI = () => {
            this.socialButton?.move(-this.screen.centerX + 10, -this.screen.centerY + 10);
            this.userPanel?.move(this.screen.centerX - 10, -this.screen.centerY + 10);
            this.bottomBar?.move(0, this.screen.centerY);
        };
        Game.current = this;
        this.screen = new skyengine_1.Fullscreen({
            antialias: true,
        });
        this.screen.root.append(this.world = new World_1.default(), this.ui = new skyengine_1.FixedNode(0, 0));
        this.ui.append(this.socialButton = new SocialPanel_1.default());
        this.repositeUI();
        this.world.on("connect", () => this.checkDiscordLogin());
        window.addEventListener("resize", this.repositeUI);
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await superagent_1.default.get(`https://${Config_1.default.backendHost}/discord/token`).query({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}`,
                    });
                    this.codeStore.set("code", code, true);
                }
                catch (error) {
                    console.error(error);
                    code = undefined;
                }
            }
            else {
                code = undefined;
            }
        }
        if (code === undefined) {
            this.codeStore.delete("code");
            this.ui.append(new Enter_1.default(false));
        }
        else {
            try {
                const result = await superagent_1.default.get(`https://${Config_1.default.backendHost}/discord/me`).query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected();
            }
            catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                this.ui.append(new Enter_1.default(false));
            }
        }
    }
    async checkWalletConnected() {
        if (await Wallet_1.default.connected() !== true) {
            this.ui.append(new Enter_1.default(true));
        }
        else {
            const address = await Wallet_1.default.loadAddress();
            this.loadUserPanel(address);
        }
    }
    async loadUserPanel(address) {
        this.ui.append(this.userPanel = new UserPanel_1.default());
        this.repositeUI();
        this.loadUser(address);
    }
    async loadUser(address) {
        try {
            const result = await superagent_1.default.get(`https://${Config_1.default.backendHost}/user`).query({ address });
            this.user = result.body;
            if (this.user.avatarChainId === undefined || this.user.avatarId === undefined) {
                new InitMaid_1.default();
            }
            else {
                this.ui.append(this.bottomBar = new BottomBar_1.default());
                this.repositeUI();
                this.world.enter(address);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    logoutFromDiscord() {
        this.codeStore.delete("code");
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map