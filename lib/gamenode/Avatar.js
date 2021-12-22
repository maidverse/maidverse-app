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
        this.userAvatar = userAvatar;
        this.yToZ = true;
        this.skin = userAvatar.avatar.skin;
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
            if (avatar.id !== undefined) {
                this.spine = new skyengine_1.SpineNode(0, 0, {
                    json: `/images/avatar/${maids_json_1.default[avatar.id]}.json`,
                    atlas: `/images/avatar/${maids_json_1.default[avatar.id]}.atlas`,
                    png: `/images/avatar/${maids_json_1.default[avatar.id]}.png`,
                }).appendTo(this);
            }
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
                `costume/${avatar.skin?.costume !== undefined ? avatar.skin.costume : "eth"}`,
                `eye/${avatar.skin?.eye !== undefined ? avatar.skin.eye : "eth"}`,
                `hair/${avatar.skin?.hair !== undefined ? avatar.skin.hair : "eth"}`,
                `headAcce/${avatar.skin?.headAcce !== undefined ? avatar.skin.headAcce : "eth"}`,
                `skinColor/${avatar.skin?.skinColor !== undefined ? avatar.skin.skinColor : "eth"}`,
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
    attack() {
        this.spine.animation = "attack";
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
        if (this.userAvatar.balloonColor !== undefined) {
            this.message.style({ backgroundColor: this.userAvatar.balloonColor });
        }
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        this.message.style({ left: -this.message.rect.width / 2 });
        const before = (0, skynode_1.el)("").appendTo(this.message);
        before.style({
            content: "",
            width: 0,
            height: 0,
            position: "absolute",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "4px solid #000000",
            borderBottom: "4px solid transparent",
            right: "calc(50% - 2px)",
            bottom: -8.5,
        });
        const after = (0, skynode_1.el)("").appendTo(this.message);
        after.style({
            content: "",
            width: 0,
            height: 0,
            position: "absolute",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: `4px solid ${this.userAvatar.balloonColor !== undefined ? this.userAvatar.balloonColor : "#fff"}`,
            borderBottom: "4px solid transparent",
            right: "calc(50% - 2px)",
            bottom: -7.5,
        });
        this.messageDelay?.delete();
        this.messageDelay = new skyengine_1.Delay(this, () => this.message?.delete(), 5000);
        if (message === "/dance") {
            this.dance();
        }
        else if (message === "/attack") {
            this.attack();
        }
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map