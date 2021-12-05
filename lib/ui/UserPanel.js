"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class UserPanel extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.changeCenter(85 / 2, -26.5 / 2);
        this.dom = (0, skynode_1.el)(".user-panel", (0, skynode_1.el)("a.connect-button", "Connect"));
    }
}
exports.default = UserPanel;
//# sourceMappingURL=UserPanel.js.map