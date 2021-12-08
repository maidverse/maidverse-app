import { GameNode, ImageNode, SpineNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import UserAvatar from "../UserAvatar";

export default class Avatar extends GameNode {

    private spine: SpineNode;
    private message: DomNode | undefined;

    constructor(userAvatar: UserAvatar) {
        super(userAvatar.x, userAvatar.y);

        const shadow = new ImageNode(0, 0, "/images/avatar/shadow.png").appendTo(this);
        shadow.scale = 0.5;

        this.spine = new SpineNode(0, 0, {
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

        this.dom = el(".avatar-dom",
            el(".name", userAvatar.discordUsername),
        );
    }

    public moveTo(x: number, y: number) {
        this.spine.animation = "walk";
        if (this.x < x) {
            this.spine.scaleX = 1;
        } else {
            this.spine.scaleX = -1;
        }
        super.moveTo(x, y, 0.18, () => {
            this.spine.animation = "idle";
        });
    }

    public showMessage(message: string) {
        this.message?.delete();
        this.message = el(".message", message);
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        this.delay(() => this.message?.delete(), 3000);
    }
}
