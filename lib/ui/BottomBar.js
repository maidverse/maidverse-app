"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Alert_1 = __importDefault(require("./dialogue/Alert"));
const SelectMaid_1 = __importDefault(require("./SelectMaid"));
class BottomBar extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.centerY = 25;
        this.dom = (0, skynode_1.el)(".bottom-bar", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/my-room.png", height: "33.5" }), (0, skynode_1.el)("span", "My Room"), { click: () => new Alert_1.default("My Room", "My room is a work in Progress") }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/maids.png", height: "29" }), (0, skynode_1.el)("span", "Maids"), { click: () => new SelectMaid_1.default() }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/social.png", height: "34.5" }), (0, skynode_1.el)("span", "Social"), { click: () => new Alert_1.default("Social", "Social is a work in Progress") }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/shop.png", height: "40" }), (0, skynode_1.el)("span", "Shop"), { click: () => new Alert_1.default("Shop", "Shop is a work in Progress") }));
    }
}
exports.default = BottomBar;
//# sourceMappingURL=BottomBar.js.map