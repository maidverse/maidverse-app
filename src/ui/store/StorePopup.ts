import { GameNode } from "@hanul/skyengine";
import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../../CommonUtil";
import NetworkProvider from "../../ethereum/NetworkProvider";
import Wallet from "../../ethereum/Wallet";
import Game from "../../view/Game";
import Lootbox0 from "./lootbox/Lootbox0";

export default class StorePopup extends GameNode {

    private balance: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            el(".store-popup",
                el("header",
                    el("h1", "Store"),
                    el(".balance",
                        el("img", { src: "/images/ui/eth-icon.png", height: "21" }),
                        this.balance = el("span"),
                    ),
                ),
                el(".content",
                    new Lootbox0(),
                ),
                el("footer",
                    el("a.close-button", "Close", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
        Game.current.ui.append(this);
        this.loadBalance();
    }

    private async loadBalance() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const amount = utils.formatEther(await NetworkProvider.getBalance(address));
            this.balance.empty().append(CommonUtil.numberWithCommas(amount, 5));
        }
    }
}
