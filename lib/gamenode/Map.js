"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class Map extends skyengine_1.Image {
    constructor() {
        super(0, 0, "/images/cafe-back.png");
        this.centerY = 210 / 2;
        this.addTouchArea(new skyengine_1.Polygon(0, 0, [
            { x: 0, y: 0 },
            { x: 1091, y: 545.5 },
            { x: 0, y: 1091 },
            { x: -1091, y: 545.5 },
        ]));
        this.showTouchArea();
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map