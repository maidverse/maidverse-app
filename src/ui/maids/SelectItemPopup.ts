import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import superagent from "superagent";
import AvatarInfo from "../../AvatarInfo";
import Config from "../../Config";
import Wallet from "../../ethereum/Wallet";
import Game from "../../view/Game";

export default class SelectItemPopup extends GameNode {

    private content: DomNode;

    constructor(
        private part: string,
        private avatarChainId: number,
        private avatar: AvatarInfo,
        private refresh: () => void,
    ) {
        super(0, 0);
        this.dom = el(".popup-background",
            el(".select-item-popup",
                el("h1", "Select item"),
                this.content = el(".content"),
                el("footer",
                    el("a.close-button", "Close", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
        Game.current.ui.append(this);
        this.loadItems();
    }

    private async loadItems() {
        this.content.empty().append(el(".loading",
            el("img", { src: "/images/ui/loading.png", height: "109.5" }),
        ));

        const address = await Wallet.loadAddress();
        const result = await superagent.get(`https://${Config.backendHost}/items`).query({ owner: Game.current.discordUser?.id, part: this.part });
        const items = result.body;

        const list = el(".items");

        for (const item of items) {
            el("a.item",
                el("img", { src: `/images/avatar/${item.part}/${item.key}.png`, height: "50" }),
                {
                    click: async () => {
                        const message = "Select item";
                        const signedMessage = await Wallet.signMessage(message);
                        try {
                            if (this.avatar.skin === undefined) {
                                this.avatar.skin = {};
                            }
                            if (this.avatar.skin[item.part] === item.key) {
                                delete this.avatar.skin[item.part];
                            } else {
                                this.avatar.skin[item.part] = item.key;
                            }

                            const result = await fetch(`https://${Config.backendHost}/setskin`, {
                                method: "POST",
                                body: JSON.stringify({
                                    address, message, signedMessage,
                                    avatarChainId: this.avatarChainId,
                                    avatarId: this.avatar.id,
                                    skin: this.avatar.skin,
                                }),
                            });

                            if (result.status === 200) {
                                if (
                                    Game.current.user !== undefined &&
                                    Game.current.user.avatarChainId === this.avatarChainId &&
                                    Game.current.user.avatarId === this.avatar.id
                                ) {
                                    Game.current.user.skin = this.avatar.skin;
                                }
                            }

                            this.refresh();
                            this.delete();

                        } catch (error) {
                            console.error(error);
                        }
                    },
                },
            ).appendTo(list);
        }

        this.content.empty().append(el(".items-wrapper", list));
    }
}
