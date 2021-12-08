const secure = require("../secure.json");
const INFURA_ID = secure.infuraId;

export default {

    infuraId: INFURA_ID,

    // Mainnet
    backendHost: "api.maidverse.org",
    discordOauth: "https://discord.com/api/oauth2/authorize?client_id=915530011212144661&redirect_uri=http%3A%2F%2Flocalhost%3A8413&response_type=code&scope=identify",
    chainId: 1,
    endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x4ed132ffca5b16d04fea2db3d1416dac8371279b",
    },

    // Testnet
    /*backendHost: "localhost:8079",
    discordOauth: "https://discord.com/api/oauth2/authorize?client_id=915530011212144661&redirect_uri=http%3A%2F%2Flocalhost%3A8413&response_type=code&scope=identify",
    chainId: 3,
    endpoint: `wss://ropsten.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x26e1e53CF91538AB29cf16EE8b6983Ae3e6566B6",
    },*/
};