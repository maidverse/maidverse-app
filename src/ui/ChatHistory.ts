import { DomNode, el } from "@hanul/skynode";
import Game from "../view/Game";

export default class ChatHistory extends DomNode {

    constructor() {
        super(".chat-history");

        this.init(Game.current.world.discordMessages);
        Game.current.world.on("loadDiscordMessages", () => {
            this.init(Game.current.world.discordMessages);
        });
        Game.current.world.on("discordMessage", (message) => {
            this.add(message);
            this.domElement.scrollTo(0, 999999);
        });
    }

    private add(message: string) {
        const index = message.indexOf(":");
        this.append(el(".message",
            el("span.who", `${message.substring(0, index)} :`),
            el("span.text", message.substring(index + 2)),
        ));
        if (this.children.length > 50) {
            this.children[0].delete();
        }
    }

    private init(messages: string[]) {
        for (const message of messages) {
            this.add(message);
        }
        setTimeout(() => this.domElement.scrollTo(0, 999999));
    }

    public hide() {
        this.style({ display: "none" });
    }

    public show() {
        this.style({ display: "block" });
        this.domElement.scrollTo(0, 999999);
    }
}
