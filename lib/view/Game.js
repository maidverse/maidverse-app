"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const Alert_1 = __importDefault(require("../ui/dialogue/Alert"));
class Game {
    constructor() {
        Game.current = this;
        this.screen = new skyengine_1.Fullscreen();
        new Alert_1.default("Select maid avatar", "You don't have a maid yet").appendTo(this.screen.root);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map