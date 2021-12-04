import { BigNumber } from "ethers";
import { MaidverseAvatars } from "./abi/typechain";
import ERC721Contract from "./standard/ERC721Contract";
declare class MaidverseAvatarsContract extends ERC721Contract<MaidverseAvatars> {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: MaidverseAvatarsContract;
export default _default;
//# sourceMappingURL=MaidverseAvatarsContract.d.ts.map