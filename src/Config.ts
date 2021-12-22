const secure = require("../secure.json");
const INFURA_ID = secure.infuraId;

export default {

    infuraId: INFURA_ID,

    // Mainnet
    //backendHost: "localhost:8079",
    backendHost: "api.maidverse.org",
    chainId: 1,
    endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x4ed132ffca5b16d04fea2db3d1416dac8371279b",
        ItemStore: "0xbd4c4ff7ae32b0a100b004838850ae5b17f4bde1",
    },

    // Testnet
    /*backendHost: "localhost:8079",
    chainId: 3,
    endpoint: `wss://ropsten.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x26e1e53CF91538AB29cf16EE8b6983Ae3e6566B6",
        ItemStore: "",
    },*/
};