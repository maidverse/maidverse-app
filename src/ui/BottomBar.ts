import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class BottomBar extends GameNode {

    constructor() {
        super(0, 0);
        this.dom = el(".bottom-bar", "Bottom Bar");
    }
}
