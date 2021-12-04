"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class WebSocketClient extends eventcontainer_1.default {
    constructor(url) {
        super();
        this.sendKey = 0;
        this.webSocket = new WebSocket(url);
        this.webSocket.onopen = () => this.fireEvent("connect");
        this.webSocket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            this.fireEvent(data.method, ...data.params);
        };
        this.webSocket.onclose = () => this.fireEvent("disconnect");
    }
    send(method, ...params) {
        if (typeof params[params.length - 1] === "function") {
            const callback = params.pop();
            this.on(`__callback_${this.sendKey}`, callback);
        }
        this.webSocket.send(JSON.stringify({ method, params, __send_key: this.sendKey }));
        this.sendKey += 1;
    }
}
exports.default = WebSocketClient;
//# sourceMappingURL=WebSocketClient.js.map