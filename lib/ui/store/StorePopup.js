"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const NetworkProvider_1 = __importDefault(require("../../ethereum/NetworkProvider"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
const Game_1 = __importDefault(require("../../view/Game"));
const Lootbox0_1 = __importDefault(require("./lootbox/Lootbox0"));
class StorePopup extends skyengine_1.GameNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skynode_1.el)(".popup-background", (0, skynode_1.el)(".store-popup", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "Store"), (0, skynode_1.el)(".balance", (0, skynode_1.el)("img", { src: "/images/ui/eth-icon.png", height: "21" }), this.balance = (0, skynode_1.el)("span"))), (0, skynode_1.el)(".content", new Lootbox0_1.default()), (0, skynode_1.el)("footer", (0, skynode_1.el)("a.close-button", "Close", {
            click: () => this.delete(),
        }))));
        Game_1.default.current.ui.append(this);
        this.loadBalance();
    }
    async loadBalance() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const amount = ethers_1.utils.formatEther(await NetworkProvider_1.default.getBalance(address));
            this.balance.empty().append(CommonUtil_1.default.numberWithCommas(amount, 5));
        }
    }
}
exports.default = StorePopup;
//# sourceMappingURL=StorePopup.js.map