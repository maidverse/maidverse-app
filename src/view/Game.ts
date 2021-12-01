import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
