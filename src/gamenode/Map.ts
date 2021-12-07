import { Image, Polygon } from "@hanul/skyengine";

export default class Map extends Image {

    constructor() {
        super(0, 0, "/images/cafe-back.png");
        this.centerY = 210 / 2;

        this.addTouchArea(new Polygon(0, 0, [
            { x: 0, y: 0 },
            { x: 1091, y: 545.5 },
            { x: 0, y: 1091 },
            { x: -1091, y: 545.5 },
        ]))

        this.showTouchArea();
    }
}
