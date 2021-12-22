"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Game_1 = __importDefault(require("../../view/Game"));
class ResultPopup extends skyengine_1.GameNode {
    constructor(items) {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".result-popup", (0, skynode_1.el)("h1", "Result"), this.content = (0, skynode_1.el)(".content"), (0, skynode_1.el)("footer", (0, skynode_1.el)("a.close-button", "Close", {
            click: () => this.delete(),
        }))));
        Game_1.default.current.ui.append(this);
        for (const item of items) {
            this.content.append((0, skynode_1.el)(".result", (0, skynode_1.el)("img.avatar", { src: "/images/avatar/png/avatar.png", height: "100" }), (0, skynode_1.el)(".items", (0, skynode_1.el)(".item", (0, skynode_1.el)("img", { src: `/images/avatar/hair/${item.hair}.png` })), (0, skynode_1.el)(".item", (0, skynode_1.el)("img", { src: `/images/avatar/headAcce/${item.headAcce}.png` })), (0, skynode_1.el)(".item", (0, skynode_1.el)("img", { src: `/images/avatar/skinColor/${item.skinColor}.png` })), (0, skynode_1.el)(".item", (0, skynode_1.el)("img", { src: `/images/avatar/eye/${item.eye}.png` })), (0, skynode_1.el)(".item", (0, skynode_1.el)("img", { src: `/images/avatar/costume/${item.costume}.png` })))));
        }
    }
}
exports.default = ResultPopup;
//# sourceMappingURL=ResultPopup.js.map