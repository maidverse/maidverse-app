import { GameNode } from "@hanul/skyengine";
import { el } from "@hanul/skynode";

export default class UserPanel extends GameNode {

    constructor() {
        super(0, 0);
        this.changeCenter(85 / 2, -26.5 / 2);
        this.dom = el(".user-panel",
            el("a.connect-button", "Connect"),
        );
    }
}
