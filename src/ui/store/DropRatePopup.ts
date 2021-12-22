import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class DropRatePopup extends GameNode {

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            el(".drop-rate-popup"),
        );
    }
}
