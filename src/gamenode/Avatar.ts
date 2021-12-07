import { GameNode, SpineNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import UserAvatar from "../UserAvatar";

export default class Avatar extends GameNode {

    private message: DomNode | undefined;

    constructor(userAvatar: UserAvatar) {
        super(userAvatar.x, userAvatar.y);
        const spine = new SpineNode(0, 0, {
            json: "/images/avatar/maid-avatar.json",
            atlas: "/images/avatar/maid-avatar.atlas",
            png: "/images/avatar/maid-avatar.png",
        }).appendTo(this);
        spine.animation = "idle";
        spine.skins = [
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

    public showMessage(message: string) {
        this.message?.delete();
        this.message = el(".message", message);
        this.message.on("delete", () => this.message = undefined);
        this.dom?.append(this.message);
        //TODO: this.delay(() => this.message?.delete(), 3000);
    }
}
