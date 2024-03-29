import { FixedNode, Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import DiscordUserInfo from "../DiscordUserInfo";
import World from "../gamenode/World";
import UserInfo from "../UserInfo";
export default class Game implements View {
    static current: Game;
    screen: Fullscreen;
    world: World;
    ui: FixedNode;
    private socialButton;
    private userPanel;
    private bottomBar;
    discordUser: DiscordUserInfo | undefined;
    user: UserInfo | undefined;
    private codeStore;
    constructor();
    private checkDiscordLogin;
    private checkWalletConnected;
    loadUserPanel(address: string): Promise<void>;
    loadUser(address: string): Promise<void>;
    private checkBuyDebouncer;
    private checkBuy;
    private repositeUI;
    logoutFromDiscord(): void;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Game.d.ts.map