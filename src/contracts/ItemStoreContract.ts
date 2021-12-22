import { BigNumber, BigNumberish, utils } from "ethers";
import Config from "../Config";
import ItemStoreArtifact from "./abi/itemstore/artifacts/contracts/ItemStore.sol/ItemStore.json";
import { ItemStore } from "./abi/itemstore/typechain";
import Contract from "./Contract";

class ItemStoreContract extends Contract<ItemStore> {

    constructor() {
        super(Config.contracts.ItemStore, ItemStoreArtifact.abi, []);
    }

    public async nonces(address: string): Promise<BigNumber> {
        return await this.contract.nonces(address);
    }

    public async buyItem(address: string, itemId: BigNumberish): Promise<void> {
        const contract = await this.connectAndGetWalletContract();

        const messageHash = utils.solidityKeccak256(
            ["address", "uint256", "uint256"],
            [address, await this.nonces(address), itemId],
        );
        const hash = utils.arrayify(messageHash);

        await contract?.buyItem(hash, itemId, {
            value: utils.parseEther("0.03"),
        });
    }

    public async buyItems(address: string, itemIds: BigNumberish[]): Promise<void> {
        const contract = await this.connectAndGetWalletContract();

        const hashes: Uint8Array[] = [];

        let nonce = (await this.nonces(address)).toNumber();
        for (const itemId of itemIds) {
            const messageHash = utils.solidityKeccak256(
                ["address", "uint256", "uint256"],
                [address, nonce, itemId],
            );
            nonce += 1;
            const hash = utils.arrayify(messageHash);
            hashes.push(hash);
        }

        await contract?.buyItems(hashes, itemIds, {
            value: utils.parseEther("0.3"),
        });
    }
}

export default new ItemStoreContract();
