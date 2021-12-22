import { GameNode } from "@hanul/skyengine";
import Config from "../Config";
import UserAvatar from "../UserAvatar";
import Game from "../view/Game";
import WebSocketClient from "../WebSocketClient";
import Avatar from "./Avatar";
import Map from "./Map";

export default class World extends GameNode {

    private client = new WebSocketClient(`wss://${Config.backendHost}`);
    private avatars: { [address: string]: Avatar } = {};
    private walletAddress: string | undefined;

    public discordMessages: string[] = [];

    constructor() {
        super(0, 0);
        this.append(new Map());

        this.client.on("connect", () => {
            this.loadAvatars();
            this.loadDiscordMessages();
            this.fireEvent("connect");
        });

        this.client.on("enterAvatar", (address, userAvatar) => this.enterAvatar(address, userAvatar));
        this.client.on("exitAvatar", (address) => this.exitAvatar(address));
        this.client.on("moveAvatar", (address, x, y) => this.moveAvatar(address, x, y));
        this.client.on("message", (address, message) => this.showMessage(address, message));
        this.client.on("discordMessage", (message) => this.addDiscordMessage(message));
        this.client.on("changeAvatar", (address, id, type) => this.changeAvatar(address, id, type));
        this.client.on("changeSkin", (address, skin) => this.changeSkin(address, skin));

        this.client.on("disconnect", () => {
            console.log("disconnected.");
            this.client.reconnect();
        });
    }

    public async enter(address: string) {
        if (Game.current.discordUser !== undefined) {
            this.walletAddress = address;
            const userAvatar = await this.client.send("enter", address, Game.current.discordUser.id);
            const avatar = this.enterAvatar(address, userAvatar);
            Game.current.screen.camera.target = avatar;
        }
    }

    private createAvatar(address: string, userAvatar: UserAvatar) {
        this.avatars[address]?.delete();
        const avatar = new Avatar(userAvatar).appendTo(this);;
        this.avatars[address] = avatar;
        avatar.on("delete", () => delete this.avatars[address]);
        return avatar;
    }

    private clear() {
        for (const avatar of Object.values(this.avatars)) {
            avatar.delete();
        }
        this.avatars = {};
    }

    private async loadAvatars() {
        this.clear();
        const avatars = await this.client.send("loadAvatars");
        for (const [address, userAvatar] of Object.entries<UserAvatar>(avatars)) {
            this.createAvatar(address, userAvatar);
        }
    }

    private enterAvatar(address: string, userAvatar: UserAvatar) {
        const avatar = this.createAvatar(address, userAvatar);
        avatar.birth();
        return avatar;
    }

    private exitAvatar(address: string) {
        const avatar = this.avatars[address];
        avatar?.delete();
    }

    private moveAvatar(address: string, x: number, y: number) {
        const avatar = this.avatars[address];
        avatar?.moveTo(x, y);
    }

    public moveOrder(x: number, y: number) {
        if (this.walletAddress !== undefined) {
            this.client.send("moveAvatar", x, y);
            this.moveAvatar(this.walletAddress, x, y);
        }
    }

    private showMessage(address: string, message: string) {
        const avatar = this.avatars[address];
        avatar.showMessage(message);
    }

    public sendMessage(message: string) {
        if (this.walletAddress !== undefined) {
            this.client.send("sendMessage", message);
            this.showMessage(this.walletAddress, message);
        }
    }

    public async loadDiscordMessages() {
        this.discordMessages = await this.client.send("loadDiscordMessages");
        this.fireEvent("loadDiscordMessages");
    }

    private addDiscordMessage(message: string) {
        this.discordMessages.push(message);
        this.fireEvent("discordMessage", message);
    }

    private changeAvatar(address: string, id: number, type?: number) {
        const avatar = this.avatars[address];
        avatar?.changeSkin({ id, type, skin: avatar.skin });
    }

    private changeSkin(address: string, skin: any) {
        const avatar = this.avatars[address];
        avatar?.changeSkin({ skin });
    }
}
