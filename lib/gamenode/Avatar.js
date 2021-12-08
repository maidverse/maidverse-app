"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
class Avatar extends skyengine_1.GameNode {
    constructor(userAvatar) {
        super(userAvatar.x, userAvatar.y);
        this.yToZ = true;
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
        this.spine.on("animationend", () => {
            if (this.spine.animation === "birth") {
                this.spine.animation = "idle";
            }
        });
    }
    birth() {
        this.spine.animation = "birth";
    }
    dance() {
        this.spine.animation = "dance";
    }
    moveTo(x, y) {
        if (this.spine.animation !== "run") {
            this.spine.animation = "run";
        }
        if (this.x < x) {
            this.spine.scaleX = 1;
        }
        else {
            this.spine.scaleX = -1;
        }
        super.moveTo(x, y, 0.27, () => {
            this.spine.animation = "idle";
        });
    }
    showMessage(message) {
        this.message?.delete();
        this.message = (0, skynode_1.el)(".message", message);
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        this.messageDelay?.delete();
        this.messageDelay = new skyengine_1.Delay(this, () => this.message?.delete(), 5000);
        if (message === "/dance") {
            this.dance();
        }
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map