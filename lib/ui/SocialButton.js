"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class SocialButton extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.changeCenter(-133 / 2, -27.5 / 2);
        this.dom = (0, skynode_1.el)("a.social-button", (0, skynode_1.el)("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" }));
    }
}
exports.default = SocialButton;
//# sourceMappingURL=SocialButton.js.map