"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const ItemStoreContract_1 = __importDefault(require("../../../contracts/ItemStoreContract"));
const Wallet_1 = __importDefault(require("../../../ethereum/Wallet"));
class Lootbox0 extends skynode_1.DomNode {
    constructor() {
        super(".lootbox0");
        this.append((0, skynode_1.el)("a.supply-1-button", (0, skynode_1.el)("span", "Supply 1"), (0, skynode_1.el)(".balance", (0, skynode_1.el)("img", { src: "/images/ui/eth-icon.png", height: "21" }), (0, skynode_1.el)("span", "0.03")), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    await ItemStoreContract_1.default.buyItem(address, 0);
                }
            },
        }), (0, skynode_1.el)("a.supply-10-button", (0, skynode_1.el)("span", "Supply 10"), (0, skynode_1.el)(".balance", (0, skynode_1.el)("img", { src: "/images/ui/eth-icon.png", height: "21" }), (0, skynode_1.el)("span", "0.3")), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    const itemIds = [];
                    skyutil_1.default.repeat(10, () => {
                        itemIds.push(0);
                    });
                    await ItemStoreContract_1.default.buyItems(address, itemIds);
                }
            },
        }));
    }
}
exports.default = Lootbox0;
//# sourceMappingURL=Lootbox0.js.map