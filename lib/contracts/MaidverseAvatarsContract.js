"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const MaidverseAvatars_json_1 = __importDefault(require("./abi/avatars/artifacts/contracts/MaidverseAvatars.sol/MaidverseAvatars.json"));
const ERC721Contract_1 = __importDefault(require("./standard/ERC721Contract"));
class MaidverseAvatarsContract extends ERC721Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.MaidverseAvatars, MaidverseAvatars_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
}
exports.default = new MaidverseAvatarsContract();
//# sourceMappingURL=MaidverseAvatarsContract.js.map