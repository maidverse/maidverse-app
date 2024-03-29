import Debouncer from "@hanul/debouncer";
import { FixedNode, Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import Config from "../Config";
import DiscordUserInfo from "../DiscordUserInfo";
import Wallet from "../ethereum/Wallet";
import World from "../gamenode/World";
import Store from "../Store";
import BottomBar from "../ui/BottomBar";
import Enter from "../ui/Enter";
import InitMaidPopup from "../ui/maids/InitMaidPopup";
import SocialPanel from "../ui/SocialPanel";
import ResultPopup from "../ui/store/ResultPopup";
import UserPanel from "../ui/UserPanel";
import UserInfo from "../UserInfo";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;
    public world: World;
    public ui: FixedNode;

    private socialButton: SocialPanel | undefined;
    private userPanel: UserPanel | undefined;
    private bottomBar: BottomBar | undefined;

    public discordUser: DiscordUserInfo | undefined;
    public user: UserInfo | undefined;

    private codeStore = new Store("codeStore");

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen({
            antialias: true,
        });

        this.screen.root.append(
            this.world = new World(),
            this.ui = new FixedNode(0, 0),
        );
        this.ui.append(this.socialButton = new SocialPanel());
        this.repositeUI();

        this.world.on("connect", () => this.checkDiscordLogin());
        window.addEventListener("resize", this.repositeUI);
    }

    private async checkDiscordLogin() {

        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await superagent.get(`https://${Config.backendHost}/discord/token`).query({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}`,
                    });
                    this.codeStore.set("code", code, true);
                } catch (error) {
                    console.error(error);
                    code = undefined;
                }
            } else {
                code = undefined;
            }
        }

        if (code === undefined) {
            this.codeStore.delete("code");
            this.ui.append(new Enter(false));
        } else {
            try {
                const result = await superagent.get(`https://${Config.backendHost}/discord/me`).query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected();
            } catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                this.ui.append(new Enter(false));
            }
        }
    }

    private async checkWalletConnected() {
        if (await Wallet.connected() !== true) {
            this.ui.append(new Enter(true));
        } else {
            const address = await Wallet.loadAddress();
            this.loadUserPanel(address!);
        }
    }

    public async loadUserPanel(address: string) {
        this.ui.append(this.userPanel = new UserPanel());
        this.repositeUI();
        this.loadUser(address);
        this.checkBuy(address);
    }

    public async loadUser(address: string) {
        try {
            const result = await superagent.get(`https://${Config.backendHost}/user`).query({ address });
            this.user = result.body as UserInfo;
            if (
                (this.user.avatarChainId === undefined || this.user.avatarId === undefined) &&
                this.user.maidId === undefined &&
                this.user.nurseId === undefined
            ) {
                new InitMaidPopup();
            } else {
                this.ui.append(this.bottomBar = new BottomBar());
                this.repositeUI();
                this.world.enter(address);
            }
        } catch (error) {
            console.error(error);
        }
    }

    private checkBuyDebouncer: Debouncer = new Debouncer(100, (address) => this.checkBuy(address));

    private async checkBuy(address: string) {
        const code = this.codeStore.get("code");
        if (code !== undefined) {
            try {
                const result = await superagent.get(`https://${Config.backendHost}/checkbuy`).query({ address, code });
                if (result.body.length > 0) {
                    new ResultPopup(result.body);
                }
            } catch (error) {
                console.error(error);
            }
        }
        // 15초마다 실행
        setTimeout(() => this.checkBuyDebouncer.run(address), 15000);
    }

    private repositeUI = () => {
        this.socialButton?.move(-this.screen.centerX + 10, -this.screen.centerY + 10);
        this.userPanel?.move(this.screen.centerX - 10, -this.screen.centerY + 10);
        this.bottomBar?.move(0, this.screen.centerY);
    };

    public logoutFromDiscord() {
        this.codeStore.delete("code");
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
