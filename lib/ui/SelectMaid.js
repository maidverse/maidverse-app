"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
const Game_1 = __importDefault(require("../view/Game"));
class SelectMaid extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".select-maid", (0, skynode_1.el)("h1", "Select maid avatar"), this.content = (0, skynode_1.el)(".content"), (0, skynode_1.el)("footer", (0, skynode_1.el)("a.close-button", "Close", {
            click: () => this.delete(),
        })));
        Game_1.default.current.ui.append(this);
        this.loadMaids();
    }
    async loadMaids() {
        this.content.empty().append((0, skynode_1.el)(".loading", (0, skynode_1.el)("img", { src: "/images/ui/loading.png", height: "109.5" })));
        const address = await Wallet_1.default.loadAddress();
        const result = await superagent_1.default.get(`https://${Config_1.default.backendHost}/game/avatars`).query({ address });
        const all = result.body;
        const list = (0, skynode_1.el)(".avatars");
        let selected;
        for (const avatar of all.ethereum) {
            const item = (0, skynode_1.el)("a.avatar", (0, skynode_1.el)(".wrapper", (0, skynode_1.el)("img", { src: "/images/avatar/avatar.png", height: "50" })), {
                click: async () => {
                    const message = "Select maid avatar";
                    const signedMessage = await Wallet_1.default.signMessage(message);
                    try {
                        const result = await fetch(`https://${Config_1.default.backendHost}/setavatar`, {
                            method: "POST",
                            body: JSON.stringify({
                                address, message, signedMessage,
                                avatarChainId: 1,
                                avatarId: avatar.id,
                            }),
                        });
                        if (result.status === 200) {
                            selected?.deleteClass("selected");
                            selected = item;
                            selected.addClass("selected");
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                },
            }).appendTo(list);
            if (Game_1.default.current.user !== undefined &&
                Game_1.default.current.user.avatarChainId === 1 &&
                Game_1.default.current.user.avatarId === avatar.id) {
                selected = item;
                selected.addClass("selected");
            }
        }
        this.content.empty().append(list);
    }
}
exports.default = SelectMaid;
//# sourceMappingURL=SelectMaid.js.map