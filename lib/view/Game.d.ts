import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import UserInfo from "../UserInfo";
export default class Game implements View {
    static current: Game;
    screen: Fullscreen;
    private socialButton;
    private userPanel;
    private bottomBar;
    user: UserInfo | undefined;
    private codeStore;
    constructor();
    private checkDiscordLogin;
    private checkWalletConnected;
    createUI(): void;
    private repositeUI;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Game.d.ts.map