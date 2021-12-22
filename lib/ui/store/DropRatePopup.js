"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class DropRatePopup extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".drop-rate-popup"));
    }
}
exports.default = DropRatePopup;
//# sourceMappingURL=DropRatePopup.js.map