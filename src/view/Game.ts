import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import BottomBar from "../ui/BottomBar";
import SocialButton from "../ui/SocialButton";
import UserPanel from "../ui/UserPanel";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;

    private socialButton: SocialButton;
    private userPanel: UserPanel;
    private bottomBar: BottomBar;

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen();

        this.screen.root.append(
            this.socialButton = new SocialButton(),
            this.userPanel = new UserPanel(),
            this.bottomBar = new BottomBar(),
        );

        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
    }

    private repositeUI = () => {
        this.socialButton.move(-this.screen.centerX + 10, -this.screen.centerY + 10);
        this.userPanel.move(this.screen.centerX - 10, -this.screen.centerY + 10);
        this.bottomBar.move(0, this.screen.centerY);
    };

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
