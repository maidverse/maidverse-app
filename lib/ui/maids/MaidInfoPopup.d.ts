import { GameNode } from "@hanul/skyengine";
import AvatarInfo from "../../AvatarInfo";
export default class MaidInfoPopup extends GameNode {
    private avatarType;
    private avatarInfo;
    private slots;
    constructor(avatarType: string, avatarInfo: AvatarInfo, select: () => Promise<void>);
    private load;
}
//# sourceMappingURL=MaidInfoPopup.d.ts.map