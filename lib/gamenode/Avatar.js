"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const maids_json_1 = __importDefault(require("../maids.json"));
const nursetypes_json_1 = __importDefault(require("../nursetypes.json"));
class Avatar extends skyengine_1.GameNode {
    constructor(userAvatar) {
        super(userAvatar.x, userAvatar.y);
        this.yToZ = true;
        const shadow = new skyengine_1.ImageNode(0, 0, "/images/avatar/shadow.png").appendTo(this);
        shadow.scale = 0.5;
        this.changeSkin(userAvatar.avatar);
        this.dom = (0, skynode_1.el)(".avatar-dom", (0, skynode_1.el)(".name", userAvatar.discordUsername));
        this.spine.on("animationend", () => {
            if (this.spine.animation === "birth") {
                this.spine.animation = "normalIdle";
            }
        });
    }
    changeSkin(avatar) {
        this.spine?.delete();
        if (avatar.type === -1) {
            this.spine = new skyengine_1.SpineNode(0, 0, {
                json: `/images/avatar/${maids_json_1.default[avatar.id]}.json`,
                atlas: `/images/avatar/${maids_json_1.default[avatar.id]}.atlas`,
                png: `/images/avatar/${maids_json_1.default[avatar.id]}.png`,
            }).appendTo(this);
        }
        else if (avatar.type !== undefined) {
            this.spine = new skyengine_1.SpineNode(0, 0, {
                json: `/images/avatar/${nursetypes_json_1.default[avatar.type].spine.toLowerCase()}.json`,
                atlas: `/images/avatar/${nursetypes_json_1.default[avatar.type].spine.toLowerCase()}.atlas`,
                png: `/images/avatar/${nursetypes_json_1.default[avatar.type].spine.toLowerCase()}.png`,
            }).appendTo(this);
            this.spine.skins = [nursetypes_json_1.default[avatar.type].skin];
        }
        else {
            this.spine = new skyengine_1.SpineNode(0, 0, {
                json: "/images/avatar/maid-avatar.json",
                atlas: "/images/avatar/maid-avatar.atlas",
                png: "/images/avatar/maid-avatar.png",
            }).appendTo(this);
            this.spine.skins = [
                "costume/1",
                "eye/1",
                "hair/1",
                "headAcce/1",
                "skinColor/1",
            ];
        }
        this.spine.animation = "normalIdle";
    }
    birth() {
        this.spine.animation = "birth";
    }
    dance() {
        this.spine.animation = "dance";
    }
    moveTo(x, y) {
        if (this.spine.animation !== "normalWalk") {
            this.spine.animation = "normalWalk";
        }
        if (this.x < x) {
            this.spine.scaleX = 1;
        }
        else {
            this.spine.scaleX = -1;
        }
        super.moveTo(x, y, 0.27, () => {
            this.spine.animation = "normalIdle";
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