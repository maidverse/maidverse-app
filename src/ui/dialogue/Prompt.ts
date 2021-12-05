import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";

export default class Prompt extends GameNode {

    private input: DomNode<HTMLInputElement>;

    constructor(
        title: string,
        message: string,
        placeholder: string,
        value: string,
        handler: (value: string) => void,
    ) {
        super(0, 0);
        this.dom = el(".prompt",
            el("h1", title),
            el("p", message),
            this.input = el("input", { placeholder, value }),
            el("a.confirm-button", "Confirm", {
                click: () => {
                    handler(this.input.domElement.value);
                    this.delete();
                },
            }),
            el("a.cancel-button", "Cancel", { click: () => this.delete() }),
        );
    }
}
