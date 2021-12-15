import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import superagent from "superagent";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import Game from "../view/Game";
import maids from "../maids.json";
import nursetypes from "../nursetypes.json";

export default class SelectMaid extends GameNode {

    private content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".select-maid",
            el("h1", "Select maid avatar"),
            this.content = el(".content"),
            el("footer",
                el("a.close-button", "Close", {
                    click: () => this.delete(),
                }),
            ),
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

        const list = el(".avatars");
        let selected: DomNode | undefined;

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

                                if (Game.current.user !== undefined) {
                                    Game.current.user.avatarChainId = 1;
                                    Game.current.user.avatarId = avatar.id;
                                    Game.current.user.maidId = undefined;
                                    Game.current.user.nurseId = undefined;
                                }
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    },
                },
            ).appendTo(list);

            if (
                Game.current.user !== undefined &&
                Game.current.user.avatarChainId === 1 &&
                Game.current.user.avatarId === avatar.id
            ) {
                selected = item;
                selected.addClass("selected");
            }
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

                                if (Game.current.user !== undefined) {
                                    Game.current.user.avatarChainId = undefined;
                                    Game.current.user.avatarId = undefined;
                                    Game.current.user.maidId = avatar.id;
                                    Game.current.user.nurseId = undefined;
                                }
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    },
                },
            ).appendTo(list);

            if (
                Game.current.user !== undefined &&
                Game.current.user.maidId === avatar.id
            ) {
                selected = item;
                selected.addClass("selected");
            }
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

                                if (Game.current.user !== undefined) {
                                    Game.current.user.avatarChainId = undefined;
                                    Game.current.user.avatarId = undefined;
                                    Game.current.user.maidId = undefined;
                                    Game.current.user.nurseId = avatar.id;
                                }
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    },
                },
            ).appendTo(list);

            if (
                Game.current.user !== undefined &&
                Game.current.user.nurseId === avatar.id
            ) {
                selected = item;
                selected.addClass("selected");
            }
        }

        this.content.empty().append(list);
    }
}
