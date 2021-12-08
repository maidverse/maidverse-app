"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const Game_1 = __importDefault(require("../view/Game"));
class Map extends skyengine_1.ImageNode {
    constructor() {
        super(0, 0, "/images/cafe-back.png");
        this.centerY = 210 / 2;
        this.scale = 0.5;
        this.addTouchArea(new skyengine_1.Polygon(0, 210 / 2, [
            { x: 0, y: -545.5 },
            { x: 1091, y: 0 },
            { x: 0, y: 545.5 },
            { x: -1091, y: 0 },
        ]));
        this.on("click", (x, y) => {
            Game_1.default.current.world.moveOrder(x, y);
        });
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map