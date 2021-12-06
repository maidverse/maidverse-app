import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";
import Game from "../../view/Game";

export default class Confirm extends GameNode {

    constructor(title: string, message: string, handler: () => void) {
        super(0, 0);
        this.dom = el(".confirm",
            el("h1", title),
            el("p", message),
            el("a.confirm-button", "Confirm", {
                click: () => {
                    handler();
                    this.delete();
                },
            }),
            el("a.cancel-button", "Cancel", { click: () => this.delete() }),
        );
        Game.current.screen.root.append(this);
    }
}
