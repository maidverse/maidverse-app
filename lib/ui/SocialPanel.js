"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class SocialPanel extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.clickHandler = () => {
            this.panel?.delete();
        };
        this.changeCenter(-133 / 2, -27.5 / 2);
        this.dom = (0, skynode_1.el)(".social-panel", (0, skynode_1.el)("a.social-button", (0, skynode_1.el)("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" }), { click: (event) => { this.showPanel(); event.stopPropagation(); } }));
        window.addEventListener("click", this.clickHandler);
    }
    showPanel() {
        this.panel?.delete();
        this.dom?.append(this.panel = (0, skynode_1.el)(".panel", (0, skynode_1.el)("a.social-button", (0, skynode_1.el)("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" })), (0, skynode_1.el)("a.official-site-button", "Official Site", { href: "https://maidverse.org", target: "_blank" }), (0, skynode_1.el)(".socials", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/discord.png", height: "21" }), { href: "https://discord.gg/SCrDnBjMz3", target: "_blank" }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/twitter.png", height: "21" }), { href: "https://twitter.com/maidverse", target: "_blank" }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/ui/github.png", height: "26.5" }), { href: "https://github.com/maidverse", target: "_blank" }))));
        this.panel?.on("delete", () => this.panel = undefined);
    }
    delete() {
        window.removeEventListener("click", this.clickHandler);
        super.delete();
    }
}
exports.default = SocialPanel;
//# sourceMappingURL=SocialPanel.js.map