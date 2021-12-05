import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class Enter extends GameNode {

    constructor(x: number, y: number) {
        super(x, y);
        this.dom = el(".enter");
    }
}