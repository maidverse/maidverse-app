import { GameNode } from "@hanul/skyengine";
export default class World extends GameNode {
    private client;
    private avatars;
    private walletAddress;
    discordMessages: string[];
    constructor();
    enter(address: string): Promise<void>;
    private createAvatar;
    private clear;
    private loadAvatars;
    private enterAvatar;
    private exitAvatar;
    private moveAvatar;
    moveOrder(x: number, y: number): void;
    private showMessage;
    sendMessage(message: string): void;
    loadDiscordMessages(): Promise<void>;
    private addDiscordMessage;
    private changeAvatar;
}
//# sourceMappingURL=World.d.ts.map