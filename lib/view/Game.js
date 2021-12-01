"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class Game {
    constructor() {
        Game.current = this;
        this.screen = new skyengine_1.Fullscreen();
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map