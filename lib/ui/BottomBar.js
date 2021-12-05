"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class BottomBar extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".bottom-bar", "Bottom Bar");
    }
}
exports.default = BottomBar;
//# sourceMappingURL=BottomBar.js.map