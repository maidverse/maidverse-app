"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaidverseAvatars__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MaidverseAvatars__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_feeReceiver, _fee, overrides) {
        return super.deploy(_feeReceiver, _fee, overrides || {});
    }
    getDeployTransaction(_feeReceiver, _fee, overrides) {
        return super.getDeployTransaction(_feeReceiver, _fee, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MaidverseAvatars__factory = MaidverseAvatars__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeReceiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "SetBaseURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "isBatchMinter",
                type: "bool",
            },
        ],
        name: "SetBatchMinter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "SetContractURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "isMinter",
                type: "bool",
            },
        ],
        name: "SetMinter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "SetRoyaltyInfo",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_ALL_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "contractURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "fee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "feeReceiver",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isBatchMinter",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isMinter",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amounts",
                type: "uint256",
            },
        ],
        name: "mintBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amounts",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "recipients",
                type: "address[]",
            },
        ],
        name: "mintBatchMulti",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "noncesForAll",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permitAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
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
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "baseURI_",
                type: "string",
            },
        ],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "setContractURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_isMinter",
                type: "bool",
            },
            {
                internalType: "enum MaidverseAvatars.MinterType",
                name: "minterType",
                type: "uint8",
            },
        ],
        name: "setMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256",
            },
        ],
        name: "setRoyaltyInfo",
        outputs: [],
        stateMutability: "nonpayable",
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
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6101206040523480156200001257600080fd5b5060405162003267380380620032678339810160408190526200003591620004ad565b604051806040016040528060118152602001704d6169647665727365204176617461727360781b815250604051806040016040528060028152602001614d4160f01b815250620000946200008e6200025b60201b60201c565b6200025f565b8151620000a990600190602085019062000407565b508051620000bf90600290602084019062000407565b50504660a090815260408051808201825260118152704d6169647665727365204176617461727360781b6020918201527fec6e1d062501e5ebab99955ab11af81bee29cbcffd19fadff30b4f45a57f6bd660c09081528251808401845260018152603160f81b908301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660e08190527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610100819052825186518651958601929092529484019490945260608301526080820192909252309281019290925201905060408051601f198184030181529190528051602090910120608052620001ca336001620002af565b620001d733600162000303565b620001e560006001620002af565b620001f1828262000357565b60405180606001604052806022815260200162003245602291398051620002219160109160209091019062000407565b5060405180606001604052806021815260200162003224602191398051620002529160119160209091019062000407565b50505062000526565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166000818152600b6020526040808220805460ff191685151590811790915590519092917f1f96bc657d385fd83da973a43f2ad969e6d96b6779b779571a7306db7ca1cd0091a35050565b6001600160a01b0382166000818152600c6020526040808220805460ff191685151590811790915590519092917ff3d4ee1976f9a5bf7c6570a20156b05716c61e37413cf88f21e86f5bcbbd738691a35050565b6127108110620003ad5760405162461bcd60e51b815260206004820152601d60248201527f4d6169647665727365417661746172733a20496e76616c696420466565000000604482015260640160405180910390fd5b600e80546001600160a01b0319166001600160a01b038416908117909155600f8290556040518281527fff26d16febb506bdb66324138b1086facb8bd304fc773e610e0aa1593b7a07469060200160405180910390a25050565b8280546200041590620004e9565b90600052602060002090601f01602090048101928262000439576000855562000484565b82601f106200045457805160ff191683800117855562000484565b8280016001018555821562000484579182015b828111156200048457825182559160200191906001019062000467565b506200049292915062000496565b5090565b5b8082111562000492576000815560010162000497565b60008060408385031215620004c157600080fd5b82516001600160a01b0381168114620004d957600080fd5b6020939093015192949293505050565b600181811c90821680620004fe57607f821691505b602082108114156200052057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051612cb96200056b6000396000610a0401526000610a5201526000610a2a015260006109b3015260006109dc0152612cb96000f3fe608060405234801561001057600080fd5b506004361061023d5760003560e01c8063715018a61161013b578063b3f00674116100b8578063ddca3f431161007c578063ddca3f431461055a578063e2e784d514610563578063e8a3d48514610576578063e985e9c51461057e578063f2fde38b146105ba57600080fd5b8063b3f00674146104e7578063b4e13c8d146104fa578063b88d4fde14610521578063c87b56dd14610534578063d0b585f11461054757600080fd5b8063938e3d7b116100ff578063938e3d7b1461048357806395d89b4114610496578063a22cb4651461049e578063aa271e1a146104b1578063aba07847146104d457600080fd5b8063715018a6146104245780637ac2ff7b1461042c578063850f02321461043f5780638da5cb5b14610452578063904dfb8e1461046357600080fd5b80632f745c59116101c95780634f6ccce71161018d5780634f6ccce7146103c557806355f804b3146103d85780636352211e146103eb5780636a627842146103fe57806370a082311461041157600080fd5b80632f745c591461034d57806330adf81f146103605780633644e5151461038757806342842e0e1461038f57806344a53830146103a257600080fd5b8063141a468c11610210578063141a468c146102bf57806318160ddd146102ed57806320e409b4146102f557806323b872dd146103085780632a55205a1461031b57600080fd5b806301ffc9a71461024257806306fdde031461026a578063081812fc1461027f578063095ea7b3146102aa575b600080fd5b610255610250366004612415565b6105cd565b60405190151581526020015b60405180910390f35b6102726105f8565b604051610261919061248a565b61029261028d36600461249d565b61068a565b6040516001600160a01b039091168152602001610261565b6102bd6102b83660046124d2565b610724565b005b6102df6102cd36600461249d565b60096020526000908152604090205481565b604051908152602001610261565b600d546102df565b6102bd61030336600461249d565b61083a565b6102bd6103163660046124fc565b6108ae565b61032e610329366004612538565b6108df565b604080516001600160a01b039093168352602083019190915201610261565b6102df61035b3660046124d2565b610919565b6102df7f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b6102df6109af565b6102bd61039d3660046124fc565b610aa0565b6102556103b036600461255a565b600c6020526000908152604090205460ff1681565b6102df6103d336600461249d565b610abb565b6102bd6103e6366004612575565b610b12565b6102926103f936600461249d565b610b86565b6102df61040c36600461255a565b610bfd565b6102df61041f36600461255a565b610c83565b6102bd610d0a565b6102bd61043a3660046125f8565b610d40565b6102bd61044d366004612650565b610ffa565b6000546001600160a01b0316610292565b6102df61047136600461255a565b600a6020526000908152604090205481565b6102bd610491366004612575565b6110ec565b610272611154565b6102bd6104ac3660046126df565b611163565b6102556104bf36600461255a565b600b6020526000908152604090205460ff1681565b6102bd6104e2366004612712565b611172565b600e54610292906001600160a01b031681565b6102df7fdaab21af31ece73a508939fedd476a5ee5129a5ed4bb091f3236ffb45394df6281565b6102bd61052f36600461276d565b6113c5565b61027261054236600461249d565b6113fd565b6102bd610555366004612849565b6114d8565b6102df600f5481565b6102bd6105713660046124d2565b6115ae565b6102726115e2565b61025561058c366004612894565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6102bd6105c836600461255a565b611670565b600063152a902d60e11b6001600160e01b0319831614806105f257506105f28261170b565b92915050565b606060018054610607906128be565b80601f0160208091040260200160405190810160405280929190818152602001828054610633906128be565b80156106805780601f1061065557610100808354040283529160200191610680565b820191906000526020600020905b81548152906001019060200180831161066357829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b03166107085760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b600061072f82610b86565b9050806001600160a01b0316836001600160a01b0316141561079d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016106ff565b336001600160a01b03821614806107b957506107b9813361058c565b61082b5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016106ff565b6108358383611730565b505050565b336000908152600c602052604090205460ff166108695760405162461bcd60e51b81526004016106ff906128f9565b600d5460005b8281101561089c5761088a336108858385612946565b61179e565b806108948161295e565b91505061086f565b506108a78282612946565b600d555050565b6108b833826118ec565b6108d45760405162461bcd60e51b81526004016106ff90612979565b6108358383836119e3565b600e54600f5460009182916001600160a01b03909116906127109061090490866129ca565b61090e91906129ff565b915091509250929050565b600061092483610c83565b82106109865760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016106ff565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b60007f00000000000000000000000000000000000000000000000000000000000000004614156109fe57507f000000000000000000000000000000000000000000000000000000000000000090565b604080517f000000000000000000000000000000000000000000000000000000000000000060208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b610835838383604051806020016040528060008152506113c5565b6000600d548210610b0e5760405162461bcd60e51b815260206004820152601f60248201527f4d6169647665727365417661746172733a20496e76616c696420696e6465780060448201526064016106ff565b5090565b6000546001600160a01b03163314610b3c5760405162461bcd60e51b81526004016106ff90612a13565b610b486010838361236f565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa8282604051610b7a929190612a48565b60405180910390a15050565b6000818152600360205260408120546001600160a01b0316806105f25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016106ff565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765460ff1680610c465750336000908152600b602052604090205460ff165b610c625760405162461bcd60e51b81526004016106ff906128f9565b50600d54610c70828261179e565b610c7b816001612946565b600d55919050565b60006001600160a01b038216610cee5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016106ff565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b03163314610d345760405162461bcd60e51b81526004016106ff90612a13565b610d3e6000611b8e565b565b83421115610d605760405162461bcd60e51b81526004016106ff90612a77565b6000610d6a6109af565b60008781526009602052604081208054929350909183917f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad918b918b919086610db28361295e565b909155506040805160208101959095526001600160a01b03909316928401929092526060830152608082015260a0810188905260c00160405160208183030381529060405280519060200120604051602001610e2592919061190160f01b81526002810192909252602282015260420190565b6040516020818303038152906040528051906020012090506000610e4888610b86565b9050806001600160a01b0316896001600160a01b03161415610eb65760405162461bcd60e51b815260206004820152602160248201527f4d6169647665727365417661746172733a20496e76616c6964207370656e64656044820152603960f91b60648201526084016106ff565b803b15610fa257604080516020810187905280820186905260f888901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b03831691631626ba7e91610f1e918691606501612ab9565b60206040518083038186803b158015610f3657600080fd5b505afa158015610f4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6e9190612ad2565b6001600160e01b031916631626ba7e60e01b14610f9d5760405162461bcd60e51b81526004016106ff90612aef565b610fe5565b6000610fb083888888611bde565b9050816001600160a01b0316816001600160a01b031614610fe35760405162461bcd60e51b81526004016106ff90612aef565b505b610fef8989611730565b505050505050505050565b336000908152600c602052604090205460ff166110295760405162461bcd60e51b81526004016106ff906128f9565b8083146110845760405162461bcd60e51b8152602060048201526024808201527f4d6169647665727365417661746172733a20496e76616c696420706172616d656044820152637465727360e01b60648201526084016106ff565b600d5460005b848110156110d8576110c68484838181106110a7576110a7612b26565b90506020020160208101906110bc919061255a565b6108858385612946565b806110d08161295e565b91505061108a565b506110e38482612946565b600d5550505050565b6000546001600160a01b031633146111165760405162461bcd60e51b81526004016106ff90612a13565b6111226011838361236f565b507f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea528282604051610b7a929190612a48565b606060028054610607906128be565b61116e338383611d87565b5050565b834211156111925760405162461bcd60e51b81526004016106ff90612a77565b600061119c6109af565b6001600160a01b0388166000908152600a602052604081208054929350909183917fdaab21af31ece73a508939fedd476a5ee5129a5ed4bb091f3236ffb45394df62918b918b9190866111ee8361295e565b909155506040805160208101959095526001600160a01b039384169085015291166060830152608082015260a0810188905260c0016040516020818303038152906040528051906020012060405160200161126092919061190160f01b81526002810192909252602282015260420190565b604051602081830303815290604052805190602001209050611282883b151590565b1561136c57604080516020810186905280820185905260f887901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e916112e8918591606501612ab9565b60206040518083038186803b15801561130057600080fd5b505afa158015611314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113389190612ad2565b6001600160e01b031916631626ba7e60e01b146113675760405162461bcd60e51b81526004016106ff90612aef565b6113af565b600061137a82878787611bde565b9050886001600160a01b0316816001600160a01b0316146113ad5760405162461bcd60e51b81526004016106ff90612aef565b505b6113bb88886001611d87565b5050505050505050565b6113cf33836118ec565b6113eb5760405162461bcd60e51b81526004016106ff90612979565b6113f784848484611e56565b50505050565b6000818152600360205260409020546060906001600160a01b031661147c5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016106ff565b6000611486611e89565b905060008151116114a657604051806020016040528060008152506114d1565b806114b084611e98565b6040516020016114c1929190612b3c565b6040516020818303038152906040525b9392505050565b6000546001600160a01b031633146115025760405162461bcd60e51b81526004016106ff90612a13565b600081600181111561151657611516612b6b565b1415611565576001600160a01b0383166000908152600b602052604090205460ff161515821515141561155b5760405162461bcd60e51b81526004016106ff90612b81565b6108358383611f96565b6001600160a01b0383166000908152600c602052604090205460ff16151582151514156115a45760405162461bcd60e51b81526004016106ff90612b81565b6108358383611fea565b6000546001600160a01b031633146115d85760405162461bcd60e51b81526004016106ff90612a13565b61116e828261203e565b601180546115ef906128be565b80601f016020809104026020016040519081016040528092919081815260200182805461161b906128be565b80156116685780601f1061163d57610100808354040283529160200191611668565b820191906000526020600020905b81548152906001019060200180831161164b57829003601f168201915b505050505081565b6000546001600160a01b0316331461169a5760405162461bcd60e51b81526004016106ff90612a13565b6001600160a01b0381166116ff5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106ff565b61170881611b8e565b50565b60006001600160e01b0319821663780e9d6360e01b14806105f257506105f2826120e9565b600081815260056020526040902080546001600160a01b0319166001600160a01b038416908117909155819061176582610b86565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166117f45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106ff565b6000818152600360205260409020546001600160a01b0316156118595760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106ff565b61186560008383612139565b6001600160a01b038216600090815260046020526040812080546001929061188e908490612946565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600360205260408120546001600160a01b03166119655760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016106ff565b600061197083610b86565b9050806001600160a01b0316846001600160a01b031614806119ab5750836001600160a01b03166119a08461068a565b6001600160a01b0316145b806119db57506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166119f682610b86565b6001600160a01b031614611a5e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016106ff565b6001600160a01b038216611ac05760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106ff565b611acb838383612139565b611ad6600082611730565b6001600160a01b0383166000908152600460205260408120805460019290611aff908490612bc9565b90915550506001600160a01b0382166000908152600460205260408120805460019290611b2d908490612946565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611c5b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016106ff565b8360ff16601b1480611c7057508360ff16601c145b611cc75760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016106ff565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015611d1b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d7e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106ff565b95945050505050565b816001600160a01b0316836001600160a01b03161415611de95760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106ff565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611e618484846119e3565b611e6d84848484612144565b6113f75760405162461bcd60e51b81526004016106ff90612be0565b606060108054610607906128be565b606081611ebc5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611ee65780611ed08161295e565b9150611edf9050600a836129ff565b9150611ec0565b60008167ffffffffffffffff811115611f0157611f01612757565b6040519080825280601f01601f191660200182016040528015611f2b576020820181803683370190505b5090505b84156119db57611f40600183612bc9565b9150611f4d600a86612c32565b611f58906030612946565b60f81b818381518110611f6d57611f6d612b26565b60200101906001600160f81b031916908160001a905350611f8f600a866129ff565b9450611f2f565b6001600160a01b0382166000818152600b6020526040808220805460ff191685151590811790915590519092917f1f96bc657d385fd83da973a43f2ad969e6d96b6779b779571a7306db7ca1cd0091a35050565b6001600160a01b0382166000818152600c6020526040808220805460ff191685151590811790915590519092917ff3d4ee1976f9a5bf7c6570a20156b05716c61e37413cf88f21e86f5bcbbd738691a35050565b612710811061208f5760405162461bcd60e51b815260206004820152601d60248201527f4d6169647665727365417661746172733a20496e76616c69642046656500000060448201526064016106ff565b600e80546001600160a01b0319166001600160a01b038416908117909155600f8290556040518281527fff26d16febb506bdb66324138b1086facb8bd304fc773e610e0aa1593b7a07469060200160405180910390a25050565b60006001600160e01b031982166380ac58cd60e01b148061211a57506001600160e01b03198216635b5e139f60e01b145b806105f257506301ffc9a760e01b6001600160e01b03198316146105f2565b61083583838361224e565b60006001600160a01b0384163b1561224657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290612188903390899088908890600401612c46565b602060405180830381600087803b1580156121a257600080fd5b505af19250505080156121d2575060408051601f3d908101601f191682019092526121cf91810190612ad2565b60015b61222c573d808015612200576040519150601f19603f3d011682016040523d82523d6000602084013e612205565b606091505b5080516122245760405162461bcd60e51b81526004016106ff90612be0565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506119db565b5060016119db565b6001600160a01b03831661226657610835828261228e565b6001600160a01b03821661227e5761083583826122d2565b61228883826122d2565b61083582825b600061229983610c83565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b600060016122df84610c83565b6122e99190612bc9565b60008381526008602052604090205490915080821461233c576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b82805461237b906128be565b90600052602060002090601f01602090048101928261239d57600085556123e3565b82601f106123b65782800160ff198235161785556123e3565b828001600101855582156123e3579182015b828111156123e35782358255916020019190600101906123c8565b50610b0e9291505b80821115610b0e57600081556001016123eb565b6001600160e01b03198116811461170857600080fd5b60006020828403121561242757600080fd5b81356114d1816123ff565b60005b8381101561244d578181015183820152602001612435565b838111156113f75750506000910152565b60008151808452612476816020860160208601612432565b601f01601f19169290920160200192915050565b6020815260006114d1602083018461245e565b6000602082840312156124af57600080fd5b5035919050565b80356001600160a01b03811681146124cd57600080fd5b919050565b600080604083850312156124e557600080fd5b6124ee836124b6565b946020939093013593505050565b60008060006060848603121561251157600080fd5b61251a846124b6565b9250612528602085016124b6565b9150604084013590509250925092565b6000806040838503121561254b57600080fd5b50508035926020909101359150565b60006020828403121561256c57600080fd5b6114d1826124b6565b6000806020838503121561258857600080fd5b823567ffffffffffffffff808211156125a057600080fd5b818501915085601f8301126125b457600080fd5b8135818111156125c357600080fd5b8660208285010111156125d557600080fd5b60209290920196919550909350505050565b803560ff811681146124cd57600080fd5b60008060008060008060c0878903121561261157600080fd5b61261a876124b6565b95506020870135945060408701359350612636606088016125e7565b92506080870135915060a087013590509295509295509295565b60008060006040848603121561266557600080fd5b83359250602084013567ffffffffffffffff8082111561268457600080fd5b818601915086601f83011261269857600080fd5b8135818111156126a757600080fd5b8760208260051b85010111156126bc57600080fd5b6020830194508093505050509250925092565b803580151581146124cd57600080fd5b600080604083850312156126f257600080fd5b6126fb836124b6565b9150612709602084016126cf565b90509250929050565b60008060008060008060c0878903121561272b57600080fd5b612734876124b6565b9550612742602088016124b6565b945060408701359350612636606088016125e7565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561278357600080fd5b61278c856124b6565b935061279a602086016124b6565b925060408501359150606085013567ffffffffffffffff808211156127be57600080fd5b818701915087601f8301126127d257600080fd5b8135818111156127e4576127e4612757565b604051601f8201601f19908116603f0116810190838211818310171561280c5761280c612757565b816040528281528a602084870101111561282557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060006060848603121561285e57600080fd5b612867846124b6565b9250612875602085016126cf565b915060408401356002811061288957600080fd5b809150509250925092565b600080604083850312156128a757600080fd5b6128b0836124b6565b9150612709602084016124b6565b600181811c908216806128d257607f821691505b602082108114156128f357634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252601b908201527f4d6169647665727365417661746172733a20466f7262696464656e0000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561295957612959612930565b500190565b600060001982141561297257612972612930565b5060010190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008160001904831182151516156129e4576129e4612930565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612a0e57612a0e6129e9565b500490565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526022908201527f4d6169647665727365417661746172733a204578706972656420646561646c696040820152616e6560f01b606082015260800190565b8281526040602082015260006119db604083018461245e565b600060208284031215612ae457600080fd5b81516114d1816123ff565b6020808252601e908201527f4d6169647665727365417661746172733a20556e617574686f72697a65640000604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008351612b4e818460208801612432565b835190830190612b62818360208801612432565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b60208082526028908201527f4d6169647665727365417661746172733a205065726d697373696f6e206e6f746040820152670818da185b99d95960c21b606082015260800190565b600082821015612bdb57612bdb612930565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082612c4157612c416129e9565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612c799083018461245e565b969550505050505056fea264697066735822122069b926bb9de39910a7d7f8d22ac8eccad5aaff5611f577b553e684cf34cadb4764736f6c6343000809003368747470733a2f2f6170692e6d61696476657273652e6f72672f6176617461727368747470733a2f2f6170692e6d61696476657273652e6f72672f617661746172732f";
//# sourceMappingURL=MaidverseAvatars__factory.js.map