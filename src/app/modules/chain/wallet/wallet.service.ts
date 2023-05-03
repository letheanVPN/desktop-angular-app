import {Injectable} from '@angular/core';
import {WalletRpcService} from '@service/wallet.rpc.service';
import {Balance, GetTransfersIn, OpenWallet, RestoreWallet, TransferIn} from '@module/chain/wallet/interfaces';
import {FileSystemService} from '@service/filesystem/file-system.service';

@Injectable({
	providedIn: 'root'
})
/**
 * Orchestrates dealing with wallets, to add a new wallet type, implement this class
 */
export class WalletService {
	private wallets: string[] = [];

	public openedWallet: string = null
	balance: Balance;
	address: string = null;


	constructor(private fs: FileSystemService, private rpc: WalletRpcService) {}

	/**
	 * Start wallet service
	 *
	 * @returns {Promise<void>}
	 */
	startWalletService() {
		return this.rpc.startWalletService().subscribe((data) => {
			console.log(data)
		});
	}

	/**
	 * Restore wallet
	 *
	 * @param {RestoreWallet} req
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	restoreWallet(req: RestoreWallet) {
		return this.rpc.restoreWallet(req);
	}

	/**
	 * Open a known wallet
	 *
	 * @param {OpenWallet} req
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	openWallet(req: OpenWallet) {
		return this.rpc.openWallet(req).then(async () => {
			this.openedWallet = req.filename
			await this.getBalance()
			await this.getActiveAddress()
		});
	}

	/**
	 * Get wallet balance
	 *
	 * @param {Balance} req
	 * @returns {Promise<Balance>}
	 */
	getBalance() {
		this.rpc.getBalance().then((data) => this.balance = data).catch((err) => console.error(err))
	}

	/**
	 * Get the address of the wallet logged in.
	 */
	getActiveAddress(){
		this.rpc.getAddress().then((data) => this.address = data.address)
	}
	/**
	 * Gets the list of known wallets from the file system
	 */
	getWalletList() {
		return this.fs.listFiles('/wallets').then((data) => {
			console.log(data)
			if (data.length > 0) {
				for (let dat of data) {
					if (!this.wallets.includes(dat) && !dat.endsWith('.keys') && !dat.endsWith('.txt')) {
						this.wallets.push(dat);
					}
				}
			}

			return this.wallets
		});
	}

	/**
	 * Returns the wallets we know about
	 *
	 * @returns {string[]}
	 */
	walletList() {
		if (this.wallets.length === 0) {
			this.getWalletList();
		}
		return this.wallets;
	}

	loadTransfers(opts: GetTransfersIn){
		return this.rpc.getTransfers(opts).then((data) => Object.values(data).flat());
	}

	closeWallet(){
		this.address = null
		this.balance = null
		return this.rpc.stopWallet()
	}

	sendTransfer(opts: TransferIn){
		return this.rpc.transfer(opts)
	}


}
