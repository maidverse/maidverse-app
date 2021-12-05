"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class UserPanel extends skyengine_1.GameNode {
    constructor(x, y) {
        super(x, y);
        this.dom = (0, skynode_1.el)(".user-panel", "User Panel");
    }
}
exports.default = UserPanel;
//# sourceMappingURL=UserPanel.js.map