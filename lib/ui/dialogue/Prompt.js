"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const Game_1 = __importDefault(require("../../view/Game"));
class Prompt extends skyengine_1.GameNode {
    constructor(title, message, placeholder, value, handler) {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".prompt", (0, skynode_1.el)("h1", title), (0, skynode_1.el)("p", message), this.input = (0, skynode_1.el)("input", { placeholder, value }), (0, skynode_1.el)("a.confirm-button", "Confirm", {
            click: () => {
                handler(this.input.domElement.value);
                this.delete();
            },
        }), (0, skynode_1.el)("a.cancel-button", "Cancel", { click: () => this.delete() }));
        Game_1.default.current.screen.root.append(this);
    }
}
exports.default = Prompt;
//# sourceMappingURL=Prompt.js.map