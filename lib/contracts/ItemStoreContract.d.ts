import { BigNumber, BigNumberish } from "ethers";
import { ItemStore } from "./abi/itemstore/typechain";
import Contract from "./Contract";
declare class ItemStoreContract extends Contract<ItemStore> {
    constructor();
    nonces(address: string): Promise<BigNumber>;
    buyItem(address: string, itemId: BigNumberish): Promise<void>;
    buyItems(address: string, itemIds: BigNumberish[]): Promise<void>;
}
declare const _default: ItemStoreContract;
export default _default;
//# sourceMappingURL=ItemStoreContract.d.ts.map