import AvatarInfo from "./AvatarInfo";

export default interface UserAvatar {
    discordId: string,
    discordUsername: string,
    avatar: AvatarInfo,
    x: number, y: number,
    balloonColor: string | undefined,
    skin: any | undefined,
}