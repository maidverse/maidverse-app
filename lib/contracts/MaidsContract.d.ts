import { BigNumber, BigNumberish } from "ethers";
import { Maids } from "./maidcoin/typechain";
import ERC721EnumerableContract from "./standard/ERC721EnumerableContract";
declare class MaidsContract extends ERC721EnumerableContract<Maids> {
    constructor();
    getSupportedLP(id: number): Promise<BigNumber>;
    ownerOf(maidId: number): Promise<string>;
    mint(power: BigNumberish): Promise<void>;
    support(id: BigNumberish, lpTokenAmount: BigNumberish): Promise<void>;
    desupport(id: BigNumberish, lpTokenAmount: BigNumberish): Promise<void>;
}
declare const _default: MaidsContract;
export default _default;
//# sourceMappingURL=MaidsContract.d.ts.map