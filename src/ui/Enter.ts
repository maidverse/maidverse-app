import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import CommonUtil from "../CommonUtil";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import Game from "../view/Game";

export default class Enter extends GameNode {

    private content: DomNode;
    private continueButton: DomNode;
    private dot1: DomNode;
    private dot2: DomNode;
    private steps = 0;

    constructor(discordAuthed: boolean) {
        super(0, 0);
        this.dom = el(".enter",
            el("header",
                el("h1", "Welcome"),
                el("p", "Discord login is required to enter Maidverse."),
            ),
            //el("a.info-button", ),
            this.content = el(".content"),
            el("footer",
                this.continueButton = el("a.continue-button", "Continue", {
                    click: async () => {
                        if (this.steps === 1) {
                            this.showConnectWallet();
                        }
                        if (this.steps === 3) {
                            this.delete();
                            const address = await Wallet.loadAddress();
                            Game.current.loadUserPanel(address!);
                        }
                    },
                }),
                el(".dots",
                    this.dot1 = el(".dot"),
                    this.dot2 = el(".dot"),
                ),
            ),
        );
        discordAuthed === true ? this.showDiscordAccount() : this.showDiscordLogin();
    }

    private showDiscordLogin() {
        this.content.empty().append(
            el("a.discord-login-button", "Login with Discord", {
                href: Config.discordOauth,
            }),
        );
        this.steps = 0;
        this.continueButton.addClass("off");
        this.dot1.addClass("on");
        this.dot2.deleteClass("on");
    }

    private showDiscordAccount() {
        this.content.empty().append(
            el(".discord-user", Game.current.discordUser?.username),
        );
        this.steps = 1;
        this.continueButton.deleteClass("off");
        this.dot1.addClass("on");
        this.dot2.deleteClass("on");
    }

    private showConnectWallet() {
        this.content.empty().append(
            el("a.connect-wallet-button", "Connect Wallet", {
                click: () => Wallet.connect(),
            }),
        );
        Wallet.on("connect", this.connectWalletHandler);
        this.steps = 2;
        this.continueButton.addClass("off");
        this.dot1.deleteClass("on");
        this.dot2.addClass("on");
    }

    private connectWalletHandler = async () => {
        this.showWalletAddress();
    };

    private async showWalletAddress() {
        const address = await Wallet.loadAddress();
        this.content.empty().append(
            el(".address", CommonUtil.shortenAddress(address === undefined ? "" : address)),
        );
        this.steps = 3;
        this.continueButton.deleteClass("off");
        this.dot1.deleteClass("on");
        this.dot2.addClass("on");
    }

    public delete() {
        Wallet.off("connect", this.connectWalletHandler);
        super.delete();
    }
}
