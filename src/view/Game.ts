import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import BottomBar from "../ui/BottomBar";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;

    private bottomBar: BottomBar;

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen();

        this.screen.root.append(
            this.bottomBar = new BottomBar(),
        );

        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
    }

    private repositeUI = () => {
        this.bottomBar.move(0, this.screen.height / 2 - 20);
    };

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
