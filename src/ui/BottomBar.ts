import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class BottomBar extends GameNode {

    constructor() {
        super(0, 0);
        this.centerY = 25;
        this.dom = el(".bottom-bar",
            el("a",
                el("img", { src: "/images/ui/my-room.png", height: "33.5" }),
                el("span", "My Room"),
            ),
            el("a",
                el("img", { src: "/images/ui/maids.png", height: "29" }),
                el("span", "Maids"),
            ),
            el("a",
                el("img", { src: "/images/ui/social.png", height: "34.5" }),
                el("span", "Social"),
            ),
            el("a",
                el("img", { src: "/images/ui/shop.png", height: "40" }),
                el("span", "Shop"),
            ),
        );
    }
}
