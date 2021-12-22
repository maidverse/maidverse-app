import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import Game from "../../view/Game";

export default class ResultPopup extends GameNode {

    private content: DomNode;

    constructor(items: {
        costume: string,
        eye: string,
        hair: string,
        headAcce: string,
        skinColor: string,
    }[]) {
        super(0, 0);
        this.dom = el(".popup-background",
            el(".result-popup",
                el("h1", "Result"),
                this.content = el(".content"),
                el("footer",
                    el("a.close-button", "Close", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
        Game.current.ui.append(this);

        for (const item of items) {
            this.content.append(el(".result",
                el("img.avatar", { src: "/images/avatar/png/avatar.png", height: "100" }),
                el(".items",
                    el(".item",
                        el("img", { src: `/images/avatar/hair/${item.hair}.png` }),
                    ),
                    el(".item",
                        el("img", { src: `/images/avatar/headAcce/${item.headAcce}.png` }),
                    ),
                    el(".item",
                        el("img", { src: `/images/avatar/skinColor/${item.skinColor}.png` }),
                    ),
                    el(".item",
                        el("img", { src: `/images/avatar/eye/${item.eye}.png` }),
                    ),
                    el(".item",
                        el("img", { src: `/images/avatar/costume/${item.costume}.png` }),
                    ),
                ),
            ));
        }
    }
}
