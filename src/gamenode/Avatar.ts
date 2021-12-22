import { Delay, GameNode, ImageNode, SpineNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import AvatarInfo from "../AvatarInfo";
import maids from "../maids.json";
import nursetypes from "../nursetypes.json";
import UserAvatar from "../UserAvatar";

export default class Avatar extends GameNode {

    private spine!: SpineNode;
    private message: DomNode | undefined;
    private messageDelay: Delay | undefined;

    public skin;

    constructor(private userAvatar: UserAvatar) {
        super(userAvatar.x, userAvatar.y);
        this.yToZ = true;
        this.skin = userAvatar.avatar.skin;

        const shadow = new ImageNode(0, 0, "/images/avatar/shadow.png").appendTo(this);
        shadow.scale = 0.5;

        this.changeSkin(userAvatar.avatar);

        this.dom = el(".avatar-dom",
            el(".name", userAvatar.discordUsername),
        );

        this.spine.on("animationend", () => {
            if (this.spine.animation === "birth") {
                this.spine.animation = "normalIdle";
            }
        });
    }

    public changeSkin(avatar: Partial<AvatarInfo>) {
        this.spine?.delete();

        if (avatar.type === -1) {
            if (avatar.id !== undefined) {
                this.spine = new SpineNode(0, 0, {
                    json: `/images/avatar/${maids[avatar.id]}.json`,
                    atlas: `/images/avatar/${maids[avatar.id]}.atlas`,
                    png: `/images/avatar/${maids[avatar.id]}.png`,
                }).appendTo(this);
            }
        }

        else if (avatar.type !== undefined) {

            this.spine = new SpineNode(0, 0, {
                json: `/images/avatar/${nursetypes[avatar.type].spine.toLowerCase()}.json`,
                atlas: `/images/avatar/${nursetypes[avatar.type].spine.toLowerCase()}.atlas`,
                png: `/images/avatar/${nursetypes[avatar.type].spine.toLowerCase()}.png`,
            }).appendTo(this);

            this.spine.skins = [nursetypes[avatar.type].skin];
        }

        else {

            this.spine = new SpineNode(0, 0, {
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

    public birth() {
        this.spine.animation = "birth";
    }

    public dance() {
        this.spine.animation = "dance";
    }

    public attack() {
        this.spine.animation = "attack";
    }

    public moveTo(x: number, y: number) {
        if (this.spine.animation !== "normalWalk") {
            this.spine.animation = "normalWalk";
        }
        if (this.x < x) {
            this.spine.scaleX = 1;
        } else {
            this.spine.scaleX = -1;
        }
        super.moveTo(x, y, 0.27, () => {
            this.spine.animation = "normalIdle";
        });
    }

    public showMessage(message: string) {

        this.message?.delete();
        this.message = el(".message", message);

        if (this.userAvatar.balloonColor !== undefined) {
            this.message.style({ backgroundColor: this.userAvatar.balloonColor });
        }

        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        this.message.style({ left: -this.message.rect.width / 2 });

        const before = el("").appendTo(this.message);
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

        const after = el("").appendTo(this.message);
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
        this.messageDelay = new Delay(this, () => this.message?.delete(), 5000);

        if (message === "/dance") {
            this.dance();
        } else if (message === "/attack") {
            this.attack();
        }
    }
}
