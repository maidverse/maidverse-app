import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";

export default class SocialPanel extends GameNode {

    private panel: DomNode | undefined;

    constructor() {
        super(0, 0);
        this.changeCenter(-133 / 2, -27.5 / 2);
        this.dom = el(".social-panel",
            el("a.social-button",
                el("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" }),
                { click: (event: MouseEvent) => { this.showPanel(); event.stopPropagation(); } },
            ),
        );
        window.addEventListener("click", this.clickHandler);
    }

    private showPanel() {
        this.panel?.delete();
        this.dom?.append(this.panel = el(".panel",
            el("a.social-button",
                el("img", { src: "/images/ui/logo.png", width: "133", height: "27.5" }),
            ),
            el("a.official-site-button",
                "Official Site",
                { href: "https://maidverse.org", target: "_blank" },
            ),
            el(".socials",
                el("a",
                    el("img", { src: "/images/ui/discord.png", height: "21" }),
                    { href: "https://discord.gg/SCrDnBjMz3", target: "_blank" },
                ),
                el("a",
                    el("img", { src: "/images/ui/twitter.png", height: "21" }),
                    { href: "https://twitter.com/maidverse", target: "_blank" },
                ),
                el("a",
                    el("img", { src: "/images/ui/github.png", height: "26.5" }),
                    { href: "https://github.com/maidverse", target: "_blank" },
                ),
            ),
        ));
        this.panel?.on("delete", () => this.panel = undefined);
    }

    private clickHandler = () => {
        this.panel?.delete();
    };

    public delete() {
        window.removeEventListener("click", this.clickHandler);
        super.delete();
    }
}
