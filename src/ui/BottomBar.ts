import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import Game from "../view/Game";
import ChatHistory from "./ChatHistory";
import Alert from "./dialogue/Alert";
import SelectMaidPopup from "./maids/SelectMaidPopup";
import StorePopup from "./store/StorePopup";

export default class BottomBar extends GameNode {

    private input: DomNode<HTMLInputElement>;
    private chatHistory: ChatHistory;

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
                    { click: () => new SelectMaidPopup() },
                ),
                el("a",
                    el("img", { src: "/images/ui/social.png", height: "34.5" }),
                    el("span", "Social"),
                    { click: () => new Alert("Social", "Social is a work in Progress") },
                ),
                el("a",
                    el("img", { src: "/images/ui/shop.png", height: "40" }),
                    el("span", "Shop"),
                    { click: () => new StorePopup() },
                ),
            ),
            el(".chat-bar",
                el("a.emoticon-button",
                    el("img", { src: "/images/ui/emoticon.png", height: "30" }),
                    { click: () => new Alert("Emoji", "Emoji is a work in Progress") },
                ),
                this.input = el("input", { placeholder: "Type your message here." }, {
                    keyup: (event: KeyboardEvent, input) => {
                        if (event.key === "Enter") {
                            this.sendMessage();
                        }
                    },
                    click: () => {
                        this.chatHistory.show();
                    }
                }),
                el("a.send-button", "SEND", {
                    click: () => this.sendMessage(),
                }),
            ),
            this.chatHistory = new ChatHistory(),
        );

        this.chatHistory.hide();
        this.dom.onDom("click", (event) => event.stopPropagation());
        window.addEventListener("click", () => this.chatHistory.hide());

        window.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                this.input.domElement.focus();
            }
        });
    }

    private sendMessage() {
        const message = this.input.domElement.value;
        if (message.trim() !== "") {
            Game.current.world.sendMessage(message);
        }
        this.input.domElement.value = "";
    }
}
