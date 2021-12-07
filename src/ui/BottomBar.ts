import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import Game from "../view/Game";
import Alert from "./dialogue/Alert";
import SelectMaid from "./SelectMaid";

export default class BottomBar extends GameNode {

    private input: DomNode<HTMLInputElement>;

    constructor() {
        super(0, 0);
        this.centerY = 45;
        this.dom = el(".bottom-bar",
            el(".menu",
                el("a",
                    el("img", { src: "/images/ui/my-room.png", height: "33.5" }),
                    el("span", "My Room"),
                    { click: () => new Alert("My Room", "My room is a work in Progress") },
                ),
                el("a",
                    el("img", { src: "/images/ui/maids.png", height: "29" }),
                    el("span", "Maids"),
                    { click: () => new SelectMaid() },
                ),
                el("a",
                    el("img", { src: "/images/ui/social.png", height: "34.5" }),
                    el("span", "Social"),
                    { click: () => new Alert("Social", "Social is a work in Progress") },
                ),
                el("a",
                    el("img", { src: "/images/ui/shop.png", height: "40" }),
                    el("span", "Shop"),
                    { click: () => new Alert("Shop", "Shop is a work in Progress") },
                ),
            ),
            el(".chat-bar",
                el("a.emoticon-button", el("img", { src: "/images/ui/emoticon.png", height: "30" })),
                this.input = el("input", { placeholder: "Type your message here." }, {
                    keyup: (event: KeyboardEvent, input) => {
                        if (event.key === "Enter") {
                            this.sendMessage();
                        }
                    },
                }),
                el("a.send-button", "SEND", {
                    click: () => this.sendMessage(),
                }),
            ),
        );
    }

    private sendMessage() {
        const message = this.input.domElement.value;
        if (message.trim() !== "") {
            Game.current.world.sendMessage(message);
        }
        this.input.domElement.value = "";
    }
}
