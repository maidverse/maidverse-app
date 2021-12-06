import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import Store from "../Store";
import BottomBar from "../ui/BottomBar";
import Enter from "../ui/Enter";
import SocialButton from "../ui/SocialButton";
import UserPanel from "../ui/UserPanel";
import UserInfo from "../UserInfo";

export default class Game implements View {

    public static current: Game;
    public screen: Fullscreen;

    private socialButton: SocialButton | undefined;
    private userPanel: UserPanel | undefined;
    private bottomBar: BottomBar | undefined;

    public user: UserInfo | undefined;
    private codeStore = new Store("codeStore");

    constructor() {
        Game.current = this;
        this.screen = new Fullscreen();
        this.checkDiscordLogin();
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
            this.screen.root.append(new Enter(false));
        } else {
            try {
                const result = await superagent.get(`https://${Config.backendHost}/discord/me`).query({ code });
                this.user = result.body;
                this.checkWalletConnected();
            } catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                this.screen.root.append(new Enter(false));
            }
        }
    }

    private async checkWalletConnected() {
        if (await Wallet.connected() !== true) {
            this.screen.root.append(new Enter(true));
        } else {
            this.createUI();
        }
    }

    public createUI() {
        this.screen.root.append(
            this.socialButton = new SocialButton(),
            this.userPanel = new UserPanel(),
            this.bottomBar = new BottomBar(),
        );
        this.repositeUI();
    }

    private repositeUI = () => {
        this.socialButton?.move(-this.screen.centerX + 10, -this.screen.centerY + 10);
        this.userPanel?.move(this.screen.centerX - 10, -this.screen.centerY + 10);
        this.bottomBar?.move(0, this.screen.centerY);
    };

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
