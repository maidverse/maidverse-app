"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC2981__factory = void 0;
const ethers_1 = require("ethers");
class IERC2981__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC2981__factory = IERC2981__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256",
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "royaltyAmount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=IERC2981__factory.js.map