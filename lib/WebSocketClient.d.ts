import EventContainer from "eventcontainer";
export default class WebSocketClient extends EventContainer {
    private webSocket;
    private sendKey;
    constructor(url: string);
    send(method: string, ...params: any[]): void;
}
//# sourceMappingURL=WebSocketClient.d.ts.map