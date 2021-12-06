import { GameNode } from "@hanul/skyengine";
import Map from "./Map";

export default class World extends GameNode {

    constructor() {
        super(0, 0);
        this.scale = 0.5;
        this.append(new Map());
    }
}
