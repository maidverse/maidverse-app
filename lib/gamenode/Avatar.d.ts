import { GameNode } from "@hanul/skyengine";
import UserAvatar from "../UserAvatar";
export default class Avatar extends GameNode {
    private spine;
    private message;
    private messageDelay;
    constructor(userAvatar: UserAvatar);
    birth(): void;
    moveTo(x: number, y: number): void;
    showMessage(message: string): void;
}
//# sourceMappingURL=Avatar.d.ts.map