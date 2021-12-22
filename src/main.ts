import { SkyRouter } from "skyrouter";
import Game from "./view/Game";

SkyRouter.route("**", Game);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
