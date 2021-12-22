import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import AvatarInfo from "../../AvatarInfo";
import Game from "../../view/Game";
import SelectItemPopup from "./SelectItemPopup";
import maids from "../../maids.json";
import nursetypes from "../../nursetypes.json";

export default class MaidInfoPopup extends GameNode {

    private slots: DomNode;

    constructor(
        private avatarType: string,
        private avatarInfo: AvatarInfo,
        select: () => Promise<void>,
    ) {
        super(0, 0);
        let src = "/images/avatar/png/avatar.png";
        if (avatarType === "maid") {
            src = `/images/avatar/png/${maids[avatarInfo.id]}.png`;
        } else if (avatarType === "nurse") {
            src = `/images/avatar/png/${nursetypes[avatarInfo.type!].skin.toLowerCase()}.png`;
        }

        this.dom = el(".popup-background",
            el(".maid-info-popup",
                el("h1", "Maid"),
                el(".avatar",
                    el("img", { src, height: "120" }),
                ),
                this.slots = el(".slots"),
                el("footer",
                    el("a.select-button", "Set as my avatar", {
                        click: async () => {
                            await select();
                            this.delete();
                        },
                    }),
                    el("a.close-button", "Close", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
        Game.current.ui.append(this);
        this.load();
    }

    private load() {
        this.slots.empty();
        if (this.avatarType === "ethereum") {
            this.slots.append(
                el("a.slot.costume",
                    this.avatarInfo.skin?.costume === undefined ? undefined :
                        el("img", { src: `/images/avatar/costume/${this.avatarInfo.skin.costume}.png` }),
                    { click: () => new SelectItemPopup("costume", 1, this.avatarInfo, () => this.load()) },
                ),
                el("a.slot.eye",
                    this.avatarInfo.skin?.eye === undefined ? undefined :
                        el("img", { src: `/images/avatar/eye/${this.avatarInfo.skin.eye}.png` }),
                    { click: () => new SelectItemPopup("eye", 1, this.avatarInfo, () => this.load()) },
                ),
                el("a.slot.hair",
                    this.avatarInfo.skin?.hair === undefined ? undefined :
                        el("img", { src: `/images/avatar/hair/${this.avatarInfo.skin.hair}.png` }),
                    { click: () => new SelectItemPopup("hair", 1, this.avatarInfo, () => this.load()) },
                ),
                el("a.slot.head-acce",
                    this.avatarInfo.skin?.headAcce === undefined ? undefined :
                        el("img", { src: `/images/avatar/headAcce/${this.avatarInfo.skin.headAcce}.png` }),
                    { click: () => new SelectItemPopup("headAcce", 1, this.avatarInfo, () => this.load()) },
                ),
                el("a.slot.skin-color",
                    this.avatarInfo.skin?.skinColor === undefined ? undefined :
                        el("img", { src: `/images/avatar/skinColor/${this.avatarInfo.skin.skinColor}.png` }),
                    { click: () => new SelectItemPopup("skinColor", 1, this.avatarInfo, () => this.load()) },
                ),
            );
        }
    }
}
