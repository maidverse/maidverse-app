"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const Config_1 = __importDefault(require("../../Config"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
const Game_1 = __importDefault(require("../../view/Game"));
class SelectItemPopup extends skyengine_1.GameNode {
    constructor(part, avatarChainId, avatar, refresh) {
        super(0, 0);
        this.part = part;
        this.avatarChainId = avatarChainId;
        this.avatar = avatar;
        this.refresh = refresh;
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".select-item-popup", (0, skynode_1.el)("h1", "Select item"), this.content = (0, skynode_1.el)(".content"), (0, skynode_1.el)("footer", (0, skynode_1.el)("a.close-button", "Close", {
            click: () => this.delete(),
        }))));
        Game_1.default.current.ui.append(this);
        this.loadItems();
    }
    async loadItems() {
        this.content.empty().append((0, skynode_1.el)(".loading", (0, skynode_1.el)("img", { src: "/images/ui/loading.png", height: "109.5" })));
        const address = await Wallet_1.default.loadAddress();
        const result = await superagent_1.default.get(`https://${Config_1.default.backendHost}/items`).query({ owner: Game_1.default.current.discordUser?.id, part: this.part });
        const items = result.body;
        const list = (0, skynode_1.el)(".items");
        for (const item of items) {
            (0, skynode_1.el)("a.item", (0, skynode_1.el)("img", { src: `/images/avatar/${item.part}/${item.key}.png`, height: "50" }), {
                click: async () => {
                    const message = "Select item";
                    const signedMessage = await Wallet_1.default.signMessage(message);
                    try {
                        if (this.avatar.skin === undefined) {
                            this.avatar.skin = {};
                        }
                        if (this.avatar.skin[item.part] === item.key) {
                            delete this.avatar.skin[item.part];
                        }
                        else {
                            this.avatar.skin[item.part] = item.key;
                        }
                        const result = await fetch(`https://${Config_1.default.backendHost}/setskin`, {
                            method: "POST",
                            body: JSON.stringify({
                                address, message, signedMessage,
                                avatarChainId: this.avatarChainId,
                                avatarId: this.avatar.id,
                                skin: this.avatar.skin,
                            }),
                        });
                        if (result.status === 200) {
                            if (Game_1.default.current.user !== undefined &&
                                Game_1.default.current.user.avatarChainId === this.avatarChainId &&
                                Game_1.default.current.user.avatarId === this.avatar.id) {
                                Game_1.default.current.user.skin = this.avatar.skin;
                            }
                        }
                        this.refresh();
                        this.delete();
                    }
                    catch (error) {
                        console.error(error);
                    }
                },
            }).appendTo(list);
        }
        this.content.empty().append((0, skynode_1.el)(".items-wrapper", list));
    }
}
exports.default = SelectItemPopup;
//# sourceMappingURL=SelectItemPopup.js.map