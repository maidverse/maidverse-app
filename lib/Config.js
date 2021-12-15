"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secure = require("../secure.json");
const INFURA_ID = secure.infuraId;
exports.default = {
    infuraId: INFURA_ID,
    backendHost: "api.maidverse.org",
    chainId: 1,
    endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        MaidverseAvatars: "0x4ed132ffca5b16d04fea2db3d1416dac8371279b",
    },
};
//# sourceMappingURL=Config.js.map