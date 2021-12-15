import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import superagent from "superagent";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import maids from "../maids.json";
import nursetypes from "../nursetypes.json";
import Game from "../view/Game";

export default class InitMaid extends GameNode {

    private content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".init-maid",
            el("h1", "Select maid avatar"),
            this.content = el(".content"),
        );
        Game.current.ui.append(this);
        this.loadMaids();
    }

    private async loadMaids() {
        this.content.empty().append(el(".loading",
            el("img", { src: "/images/ui/loading.png", height: "109.5" }),
        ));

        const address = await Wallet.loadAddress();
        const result = await superagent.get(`https://${Config.backendHost}/game/avatars`).query({ address });
        const all = result.body;

        if (
            all.ethereum.length === 0
        ) {
            this.content.empty().append(el(".empty",
                el("img", { src: "/images/ui/select-maid/cartoon.png", height: "119" }),
                el("p", "You don't have a maid yet"),
                el("a.mint-button",
                    el("img", { src: "/images/ui/select-maid/mint-icon.png", height: "25.5" }),
                    el("span", "Mint a Maid"),
                    { href: "https://airdrops.levxdao.org/", target: "_blank" },
                ),
                el("a.reload-button", "Reload Maids", { click: () => this.loadMaids() }),
            ));
        } else {

            const list = el(".avatars");
            let selected: DomNode | undefined;
            const continueButton = el("a.continue-button.off", "Continue", {
                click: async () => {
                    if (selected !== undefined) {
                        this.delete();
                        const address = await Wallet.loadAddress();
                        if (address !== undefined) {
                            Game.current.loadUser(address);
                        }
                    }
                },
            });

            for (const avatar of all.ethereum) {
                const item = el("a.avatar",
                    el(".wrapper",
                        el("img", { src: "/images/avatar/png/avatar.png", height: "50" }),
                    ),
                    {
                        click: async () => {
                            const message = "Select maid avatar";
                            const signedMessage = await Wallet.signMessage(message);
                            try {
                                const result = await fetch(`https://${Config.backendHost}/setavatar`, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        address, message, signedMessage,
                                        avatarChainId: 1,
                                        avatarId: avatar.id,
                                    }),
                                });
                                if (result.status === 200) {
                                    selected?.deleteClass("selected");
                                    selected = item;
                                    selected.addClass("selected");
                                    continueButton.deleteClass("off");
                                }
                            } catch (error) {
                                console.error(error);
                            }
                        },
                    },
                ).appendTo(list);
            }

            for (const avatar of all.maids) {
                const item = el("a.avatar",
                    el(".wrapper",
                        el("img", { src: `/images/avatar/png/${maids[avatar.id]}.png`, height: "50" }),
                    ),
                    {
                        click: async () => {
                            const message = "Select maid avatar";
                            const signedMessage = await Wallet.signMessage(message);
                            try {
                                const result = await fetch(`https://${Config.backendHost}/setavatar`, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        address, message, signedMessage,
                                        maidId: avatar.id,
                                    }),
                                });
                                if (result.status === 200) {
                                    selected?.deleteClass("selected");
                                    selected = item;
                                    selected.addClass("selected");
                                }
                            } catch (error) {
                                console.error(error);
                            }
                        },
                    },
                ).appendTo(list);
            }

            for (const avatar of all.nurses) {
                const item = el("a.avatar",
                    el(".wrapper",
                        el("img", { src: `/images/avatar/png/${nursetypes[avatar.type].skin.toLowerCase()}.png`, height: "50" }),
                    ),
                    {
                        click: async () => {
                            const message = "Select maid avatar";
                            const signedMessage = await Wallet.signMessage(message);
                            try {
                                const result = await fetch(`https://${Config.backendHost}/setavatar`, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        address, message, signedMessage,
                                        nurseId: avatar.id,
                                    }),
                                });
                                if (result.status === 200) {
                                    selected?.deleteClass("selected");
                                    selected = item;
                                    selected.addClass("selected");
                                }
                            } catch (error) {
                                console.error(error);
                            }
                        },
                    },
                ).appendTo(list);
            }

            this.content.empty().append(list, continueButton);
        }
    }
}
