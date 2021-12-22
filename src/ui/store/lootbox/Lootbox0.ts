import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import ItemStoreContract from "../../../contracts/ItemStoreContract";
import Wallet from "../../../ethereum/Wallet";

export default class Lootbox0 extends DomNode {

    constructor() {
        super(".lootbox0");
        this.append(
            //el("a.probability-button", "Probability", {
            //TODO: click: () => {},
            //}),
            el("a.supply-1-button",
                el("span", "Supply 1"),
                el(".balance",
                    el("img", { src: "/images/ui/eth-icon.png", height: "21" }),
                    el("span", "0.03"),
                ),
                {
                    click: async () => {
                        const address = await Wallet.loadAddress();
                        if (address !== undefined) {
                            await ItemStoreContract.buyItem(address, 0);
                        }
                    },
                },
            ),
            el("a.supply-10-button",
                el("span", "Supply 10"),
                el(".balance",
                    el("img", { src: "/images/ui/eth-icon.png", height: "21" }),
                    el("span", "0.3"),
                ),
                {
                    click: async () => {
                        const address = await Wallet.loadAddress();
                        if (address !== undefined) {
                            const itemIds: number[] = [];
                            SkyUtil.repeat(10, () => {
                                itemIds.push(0);
                            });
                            await ItemStoreContract.buyItems(address, itemIds);
                        }
                    },
                },
            ),
        );
    }
}
