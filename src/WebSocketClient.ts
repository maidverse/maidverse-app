import EventContainer from "eventcontainer";

export default class WebSocketClient extends EventContainer {

    private webSocket: WebSocket;
    private sendKey: number = 0;

    constructor(url: string) {
        super();
        this.webSocket = new WebSocket(url);
        this.webSocket.onopen = () => this.fireEvent("connect");
        this.webSocket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            this.fireEvent(data.method, ...data.params);
        };
        this.webSocket.onclose = () => this.fireEvent("disconnect");
    }

    public send(method: string, ...params: any[]): void {
        if (typeof params[params.length - 1] === "function") {
            const callback = params.pop();
            this.on(`__callback_${this.sendKey}`, callback);
        }
        this.webSocket.send(JSON.stringify({ method, params, __send_key: this.sendKey }));
        this.sendKey += 1;
    }
}
