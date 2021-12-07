import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import Wallet from "../ethereum/Wallet";
import Game from "../view/Game";

export default class UserPanel extends GameNode {

    private panel: DomNode | undefined;

    constructor() {
        super(0, 0);
        this.changeCenter(180.5 / 2, -26.5 / 2);
        this.dom = el(".user-panel",
            el("a.profile",
                el("span", Game.current.discordUser?.username),
                el("img", { src: "/images/ui/profile.png", height: "32" }),
                { click: (event: MouseEvent) => { this.showPanel(); event.stopPropagation(); } },
            ),
        );
        window.addEventListener("click", this.clickHandler);
    }

    private showPanel() {
        this.panel?.delete();
        this.dom?.append(this.panel = el(".panel",
            el(".profile",
                el("span", Game.current.discordUser?.username),
                el("img", { src: "/images/ui/profile.png", height: "32" }),
            ),
            el("a.logout-button",
                "Logout",
                {
                    click: async () => {
                        Game.current.logoutFromDiscord();
                        Wallet.disconnectFromWalletConnect();
                        location.reload();
                    },
                },
            ),
        ));
        this.panel?.on("delete", () => this.panel = undefined);
    }

    private clickHandler = () => {
        this.panel?.delete();
    };

    public delete() {
        window.removeEventListener("click", this.clickHandler);
        super.delete();
    }
}
