"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const BottomBar_1 = __importDefault(require("../ui/BottomBar"));
const SocialButton_1 = __importDefault(require("../ui/SocialButton"));
const UserPanel_1 = __importDefault(require("../ui/UserPanel"));
class Game {
    constructor() {
        this.repositeUI = () => {
            this.socialButton.move(-this.screen.centerX + 10, -this.screen.centerY + 10);
            this.userPanel.move(this.screen.centerX - 10, -this.screen.centerY + 10);
            this.bottomBar.move(0, this.screen.centerY);
        };
        Game.current = this;
        this.screen = new skyengine_1.Fullscreen();
        this.screen.root.append(this.socialButton = new SocialButton_1.default(), this.userPanel = new UserPanel_1.default(), this.bottomBar = new BottomBar_1.default());
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