import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";
import Game from "../../view/Game";

export default class Alert extends GameNode {

    constructor(title: string, message: string, handler?: () => void) {
        super(0, 0);
        this.dom = el(".alert",
            el("h1", title),
            el("p", message),
            el("a.confirm-button", "OK", {
                click: () => {
                    if (handler !== undefined) {
                        handler();
                    }
                    this.delete();
                },
            }),
        );
        Game.current.screen.root.append(this);
    }
}
