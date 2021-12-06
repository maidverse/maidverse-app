"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const Map_1 = __importDefault(require("./Map"));
class World extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.scale = 0.5;
        this.append(new Map_1.default());
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map