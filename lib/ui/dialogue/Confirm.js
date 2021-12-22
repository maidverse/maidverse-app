"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Game_1 = __importDefault(require("../../view/Game"));
class Confirm extends skyengine_1.GameNode {
    constructor(title, message, handler) {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".confirm", (0, skynode_1.el)("h1", title), (0, skynode_1.el)("p", message), (0, skynode_1.el)("a.confirm-button", "Confirm", {
            click: () => {
                handler();
                this.delete();
            },
        }), (0, skynode_1.el)("a.cancel-button", "Cancel", { click: () => this.delete() })));
        Game_1.default.current.ui.append(this);
    }
}
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map