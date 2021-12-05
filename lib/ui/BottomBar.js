"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class BottomBar extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.centerY = 25;
        this.dom = (0, skynode_1.el)(".bottom-bar", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/my-room.png", height: "33.5" }), (0, skynode_1.el)("span", "My Room")), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/maids.png", height: "29" }), (0, skynode_1.el)("span", "Maids")), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/social.png", height: "34.5" }), (0, skynode_1.el)("span", "Social")), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/shop.png", height: "40" }), (0, skynode_1.el)("span", "Shop")));
    }
}
exports.default = BottomBar;
//# sourceMappingURL=BottomBar.js.map