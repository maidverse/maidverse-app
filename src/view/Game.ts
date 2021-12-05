import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import Alert from "../ui/dialogue/Alert";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen();
        new Alert("Select maid avatar", "You don't have a maid yet").appendTo(this.screen.root);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
