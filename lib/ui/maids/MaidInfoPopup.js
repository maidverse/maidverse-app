"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Game_1 = __importDefault(require("../../view/Game"));
const SelectItemPopup_1 = __importDefault(require("./SelectItemPopup"));
const maids_json_1 = __importDefault(require("../../maids.json"));
const nursetypes_json_1 = __importDefault(require("../../nursetypes.json"));
class MaidInfoPopup extends skyengine_1.GameNode {
    constructor(avatarType, avatarInfo, select) {
        super(0, 0);
        this.avatarType = avatarType;
        this.avatarInfo = avatarInfo;
        let src = "/images/avatar/png/avatar.png";
        if (avatarType === "maid") {
            src = `/images/avatar/png/${maids_json_1.default[avatarInfo.id]}.png`;
        }
        else if (avatarType === "nurse") {
            src = `/images/avatar/png/${nursetypes_json_1.default[avatarInfo.type].skin.toLowerCase()}.png`;
        }
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".maid-info-popup", (0, skynode_1.el)("h1", "Maid"), (0, skynode_1.el)(".avatar", (0, skynode_1.el)("img", { src, height: "120" })), this.slots = (0, skynode_1.el)(".slots"), (0, skynode_1.el)("footer", (0, skynode_1.el)("a.select-button", "Set as my avatar", {
            click: async () => {
                await select();
                this.delete();
            },
        }), (0, skynode_1.el)("a.close-button", "Close", {
            click: () => this.delete(),
        }))));
        Game_1.default.current.ui.append(this);
        this.load();
    }
    load() {
        this.slots.empty();
        if (this.avatarType === "ethereum") {
            this.slots.append((0, skynode_1.el)("a.slot.costume", this.avatarInfo.skin?.costume === undefined ? undefined :
                (0, skynode_1.el)("img", { src: `/images/avatar/costume/${this.avatarInfo.skin.costume}.png` }), { click: () => new SelectItemPopup_1.default("costume", 1, this.avatarInfo, () => this.load()) }), (0, skynode_1.el)("a.slot.eye", this.avatarInfo.skin?.eye === undefined ? undefined :
                (0, skynode_1.el)("img", { src: `/images/avatar/eye/${this.avatarInfo.skin.eye}.png` }), { click: () => new SelectItemPopup_1.default("eye", 1, this.avatarInfo, () => this.load()) }), (0, skynode_1.el)("a.slot.hair", this.avatarInfo.skin?.hair === undefined ? undefined :
                (0, skynode_1.el)("img", { src: `/images/avatar/hair/${this.avatarInfo.skin.hair}.png` }), { click: () => new SelectItemPopup_1.default("hair", 1, this.avatarInfo, () => this.load()) }), (0, skynode_1.el)("a.slot.head-acce", this.avatarInfo.skin?.headAcce === undefined ? undefined :
                (0, skynode_1.el)("img", { src: `/images/avatar/headAcce/${this.avatarInfo.skin.headAcce}.png` }), { click: () => new SelectItemPopup_1.default("headAcce", 1, this.avatarInfo, () => this.load()) }), (0, skynode_1.el)("a.slot.skin-color", this.avatarInfo.skin?.skinColor === undefined ? undefined :
                (0, skynode_1.el)("img", { src: `/images/avatar/skinColor/${this.avatarInfo.skin.skinColor}.png` }), { click: () => new SelectItemPopup_1.default("skinColor", 1, this.avatarInfo, () => this.load()) }));
        }
    }
}
exports.default = MaidInfoPopup;
//# sourceMappingURL=MaidInfoPopup.js.map