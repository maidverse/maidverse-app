"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class Alert extends skyengine_1.GameNode {
    constructor(title, message, handler) {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".alert", (0, skynode_1.el)("h1", title), (0, skynode_1.el)("p", message), (0, skynode_1.el)("a.confirm-button", "OK", {
            click: () => {
                if (handler !== undefined) {
                    handler();
                }
                this.delete();
            },
        }));
    }
}
exports.default = Alert;
//# sourceMappingURL=Alert.js.map