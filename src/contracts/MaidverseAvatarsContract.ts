import { BigNumber } from "ethers";
import Config from "../Config";
import MaidverseAvatarsArtifact from "./abi/artifacts/contracts/MaidverseAvatars.sol/MaidverseAvatars.json";
import { MaidverseAvatars } from "./abi/typechain";
import ERC721Contract from "./standard/ERC721Contract";

class MaidverseAvatarsContract extends ERC721Contract<MaidverseAvatars> {

    constructor() {
        super(Config.contracts.MaidverseAvatars, MaidverseAvatarsArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}

export default new MaidverseAvatarsContract();
