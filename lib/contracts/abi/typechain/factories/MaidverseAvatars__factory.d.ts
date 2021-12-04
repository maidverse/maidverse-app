import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MaidverseAvatars } from "../MaidverseAvatars";
export declare class MaidverseAvatars__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): Promise<MaidverseAvatars>;
    getDeployTransaction(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): MaidverseAvatars;
    connect(signer: Signer): MaidverseAvatars__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MaidverseAvatars;
}
//# sourceMappingURL=MaidverseAvatars__factory.d.ts.map