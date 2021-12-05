"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class SelectMaid extends skyengine_1.GameNode {
    constructor(x, y) {
        super(x, y);
        this.dom = (0, skynode_1.el)(".select-maid");
    }
}
exports.default = SelectMaid;
//# sourceMappingURL=SelectMaid.js.map