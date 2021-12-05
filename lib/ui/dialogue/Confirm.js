"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class Confirm extends skyengine_1.GameNode {
    constructor(title, message, handler) {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".confirm", (0, skynode_1.el)("h1", title), (0, skynode_1.el)("p", message), (0, skynode_1.el)("a.confirm-button", "Confirm", {
            click: () => {
                handler();
                this.delete();
            },
        }), (0, skynode_1.el)("a.cancel-button", "Cancel", { click: () => this.delete() }));
    }
}
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map