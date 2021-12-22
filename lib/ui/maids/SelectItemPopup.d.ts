import { GameNode } from "@hanul/skyengine";
import AvatarInfo from "../../AvatarInfo";
export default class SelectItemPopup extends GameNode {
    private part;
    private avatarChainId;
    private avatar;
    private refresh;
    private content;
    constructor(part: string, avatarChainId: number, avatar: AvatarInfo, refresh: () => void);
    private loadItems;
}
//# sourceMappingURL=SelectItemPopup.d.ts.map