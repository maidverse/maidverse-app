"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class Avatar extends skyengine_1.GameNode {
    constructor(userAvatar) {
        super(userAvatar.x, userAvatar.y);
        const shadow = new skyengine_1.ImageNode(0, 0, "/images/avatar/shadow.png").appendTo(this);
        shadow.scale = 0.5;
        this.spine = new skyengine_1.SpineNode(0, 0, {
            json: "/images/avatar/maid-avatar.json",
            atlas: "/images/avatar/maid-avatar.atlas",
            png: "/images/avatar/maid-avatar.png",
        }).appendTo(this);
        this.spine.animation = "idle";
        this.spine.skins = [
            "costume/1",
            "eye/1",
            "hair/1",
            "headAcce/1",
            "skinColor/1",
        ];
        this.dom = (0, skynode_1.el)(".avatar-dom", (0, skynode_1.el)(".name", userAvatar.discordUsername));
    }
    moveTo(x, y) {
        this.spine.animation = "walk";
        if (this.x < x) {
            this.spine.scaleX = 1;
        }
        else {
            this.spine.scaleX = -1;
        }
        super.moveTo(x, y, 0.18, () => {
            this.spine.animation = "idle";
        });
    }
    showMessage(message) {
        this.message?.delete();
        this.message = (0, skynode_1.el)(".message", message);
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        this.delay(() => this.message?.delete(), 3000);
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map