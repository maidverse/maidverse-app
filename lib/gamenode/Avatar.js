"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class Avatar extends skyengine_1.GameNode {
    constructor(userAvatar) {
        super(userAvatar.x, userAvatar.y);
        const spine = new skyengine_1.SpineNode(0, 0, {
            json: "/images/avatar/maid-avatar.json",
            atlas: "/images/avatar/maid-avatar.atlas",
            png: "/images/avatar/maid-avatar.png",
        }).appendTo(this);
        spine.animation = "idle";
        spine.skins = [
            "clothes/1",
            "eye/1",
            "hair/1",
            "headAcce/1",
            "skinColor/1",
        ];
        spine.scale = 0.5;
        this.dom = (0, skynode_1.el)(".avatar-dom", (0, skynode_1.el)(".name", userAvatar.discordUsername));
    }
    showMessage(message) {
        this.message?.delete();
        this.message = (0, skynode_1.el)(".message", message);
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map