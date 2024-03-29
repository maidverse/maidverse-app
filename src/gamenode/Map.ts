import { ImageNode, Polygon } from "@hanul/skyengine";
import Game from "../view/Game";

export default class Map extends ImageNode {

    constructor() {
        super(0, 0, "/images/cafe-back.png");
        this.centerY = 210 / 2;
        this.scale = 0.5;
        this.z = -999999;

        this.addTouchArea(new Polygon(0, 210 / 2, [
            { x: 0, y: -545.5 },
            { x: 1091, y: 0 },
            { x: 0, y: 545.5 },
            { x: -1091, y: 0 },
        ]));

        this.on("click", (x, y) => {
            Game.current.world.moveOrder(x, y);
        });
    }
}
