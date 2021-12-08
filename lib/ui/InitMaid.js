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
class InitMaid extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".init-maid", (0, skynode_1.el)("h1", "Select maid avatar"), this.content = (0, skynode_1.el)(".content"));
        Game_1.default.current.screen.root.append(this);
        this.loadMaids();
    }
    async loadMaids() {
        this.content.empty().append((0, skynode_1.el)(".loading", (0, skynode_1.el)("img", { src: "/images/ui/loading.png", height: "109.5" })));
        const address = await Wallet_1.default.loadAddress();
        const result = await superagent_1.default.get(`https://${Config_1.default.backendHost}/game/avatars`).query({ address });
        const all = result.body;
        if (all.ethereum.length === 0) {
            this.content.empty().append((0, skynode_1.el)(".empty", (0, skynode_1.el)("img", { src: "/images/ui/select-maid/cartoon.png", height: "119" }), (0, skynode_1.el)("p", "You don't have a maid yet"), (0, skynode_1.el)("a.mint-button", (0, skynode_1.el)("img", { src: "/images/ui/select-maid/mint-icon.png", height: "25.5" }), (0, skynode_1.el)("span", "Mint a Maid")), (0, skynode_1.el)("a.reload-button", "Reload Maids", { click: () => this.loadMaids() })));
        }
        else {
            const list = (0, skynode_1.el)(".avatars");
            let selected;
            const continueButton = (0, skynode_1.el)("a.continue-button.off", "Continue", {
                click: async () => {
                    if (selected !== undefined) {
                        this.delete();
                        const address = await Wallet_1.default.loadAddress();
                        if (address !== undefined) {
                            Game_1.default.current.loadUser(address);
                        }
                    }
                },
            });
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
                                continueButton.deleteClass("off");
                            }
                        }
                        catch (error) {
                            console.error(error);
                        }
                    },
                }).appendTo(list);
            }
            this.content.empty().append(list, continueButton);
        }
    }
}
exports.default = InitMaid;
//# sourceMappingURL=InitMaid.js.map