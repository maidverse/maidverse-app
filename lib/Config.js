"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secure = require("../secure.json");
const INFURA_ID = secure.infuraId;
exports.default = {
    infuraId: INFURA_ID,
    backendHost: "api.maidverse.org",
    discordOauth: "https://discord.com/api/oauth2/authorize?client_id=915530011212144661&redirect_uri=http%3A%2F%2Flocalhost%3A8413&response_type=code&scope=identify",
    chainId: 1,
    endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x4ed132ffca5b16d04fea2db3d1416dac8371279b",
    },
};
//# sourceMappingURL=Config.js.map