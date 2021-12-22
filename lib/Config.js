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
        ItemStore: "0xbd4c4ff7ae32b0a100b004838850ae5b17f4bde1",
    },
};
//# sourceMappingURL=Config.js.map