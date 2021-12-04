import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
//import Alert from "../component/dialogue/Alert";
import Config from "../Config";
import NetworkProvider from "../ethereum/NetworkProvider";
import Wallet from "../ethereum/Wallet";

export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {

    protected walletContract: CT | undefined;
    protected contract: CT;

    constructor(public address: string, private abi: ContractInterface, eventNames: string[]) {
        super();
        this.contract = new ethers.Contract(address, abi, NetworkProvider.provider).connect(NetworkProvider.signer) as CT;
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        Wallet.on("chainChanged", () => this.walletContract = undefined);
    }

    public get interface() {
        return this.contract.interface;
    }

    public async getWalletContract() {
        if (await Wallet.connected() === true) {
            if (this.walletContract === undefined && Wallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, Wallet.provider).connect(Wallet.signer) as CT;
            }
            return this.walletContract;
        }
    }

    public async connectAndGetWalletContract() {
        if (await Wallet.loadChainId() !== Config.chainId) {
            alert("Wrong Network. Please change to Mainnet.");
            //TODO:
            /*new Alert("Error", "Wrong Network. Please change to Mainnet.", "Ok", () => {
                Wallet.disconnectFromWalletConnect();
            });*/
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            if (this.walletContract === undefined && Wallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, Wallet.provider).connect(Wallet.signer) as CT;
            }
            return this.walletContract;
        }
    }
}
