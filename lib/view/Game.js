"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const BottomBar_1 = __importDefault(require("../ui/BottomBar"));
class Game {
    constructor() {
        this.repositeUI = () => {
            this.bottomBar.move(0, this.screen.height / 2 - 20);
        };
        Game.current = this;
        this.screen = new skyengine_1.Fullscreen();
        this.screen.root.append(this.bottomBar = new BottomBar_1.default());
        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map