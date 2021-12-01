import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";
export default class Game implements View {
    static current: Game;
    screen: Fullscreen;
    constructor();
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Game.d.ts.map