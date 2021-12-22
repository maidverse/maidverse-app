"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const ItemStore_json_1 = __importDefault(require("./abi/itemstore/artifacts/contracts/ItemStore.sol/ItemStore.json"));
const Contract_1 = __importDefault(require("./Contract"));
class ItemStoreContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.ItemStore, ItemStore_json_1.default.abi, []);
    }
    async nonces(address) {
        return await this.contract.nonces(address);
    }
    async buyItem(address, itemId) {
        const contract = await this.connectAndGetWalletContract();
        const messageHash = ethers_1.utils.solidityKeccak256(["address", "uint256", "uint256"], [address, await this.nonces(address), itemId]);
        const hash = ethers_1.utils.arrayify(messageHash);
        await contract?.buyItem(hash, itemId, {
            value: ethers_1.utils.parseEther("0.03"),
        });
    }
    async buyItems(address, itemIds) {
        const contract = await this.connectAndGetWalletContract();
        const hashes = [];
        let nonce = (await this.nonces(address)).toNumber();
        for (const itemId of itemIds) {
            const messageHash = ethers_1.utils.solidityKeccak256(["address", "uint256", "uint256"], [address, nonce, itemId]);
            nonce += 1;
            const hash = ethers_1.utils.arrayify(messageHash);
            hashes.push(hash);
        }
        await contract?.buyItems(hashes, itemIds, {
            value: ethers_1.utils.parseEther("0.3"),
        });
    }
}
exports.default = new ItemStoreContract();
//# sourceMappingURL=ItemStoreContract.js.map