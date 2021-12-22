import { GameNode } from "@hanul/skyengine";
import AvatarInfo from "../AvatarInfo";
import UserAvatar from "../UserAvatar";
export default class Avatar extends GameNode {
    private userAvatar;
    private spine;
    private message;
    private messageDelay;
    skin: any;
    constructor(userAvatar: UserAvatar);
    changeSkin(avatar: Partial<AvatarInfo>): void;
    birth(): void;
    dance(): void;
    moveTo(x: number, y: number): void;
    showMessage(message: string): void;
}
//# sourceMappingURL=Avatar.d.ts.map