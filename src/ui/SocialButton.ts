import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class SocialButton extends GameNode {

    constructor() {
        super(0, 0);
        this.changeCenter(-133 / 2, -27.5 / 2);
        this.dom = el("a.social-button",
            el("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" }),
        );
    }
}
