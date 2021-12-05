import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class Alert extends GameNode {

    constructor(title: string, message: string) {
        super(0, 0);
        this.dom = el(".alert",
            el("h1", title),
            el("p", message),
            el("a.confirm-button", "OK", { click: () => this.delete() }),
        );
    }
}
