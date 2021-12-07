import EventContainer from "eventcontainer";
export default class WebSocketClient extends EventContainer {
    private url;
    private webSocket;
    private sendKey;
    constructor(url: string);
    reconnect(): void;
    send(method: string, ...params: any[]): Promise<any>;
}
//# sourceMappingURL=WebSocketClient.d.ts.map