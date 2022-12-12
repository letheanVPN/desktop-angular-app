import {AfterViewInit, Component, OnChanges, SimpleChanges} from '@angular/core';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {BlockchainService} from '@module/chain/blockchain.service';
import {AppConfigService} from "@service/app-config.service";
@Component({
	selector: 'lthn-chain',
	templateUrl: './blockchain.component.html'
})
export class BlockchainComponent implements AfterViewInit, OnChanges{

	blocks: BlockHeader[];
	public chainInfo: ChainGetInfo;

	public offline: boolean = true;
	public cmd: string = '';
	constructor(public chain: BlockchainService, public app: AppConfigService) {}

	async ngAfterViewInit() {

		try {
			await this.app.fetchServerPublicKey()

			await this.app.loadConfig('conf/app.ini')

			if (this.app.getConfig('app', 'start_on_boot', 'daemon', true)) {
				// we can get to here, without the cli...
				if (await this.app.fs.isDir('cli')) {
					this.startChain();
				} else {
					this.offline = true
				}
			}
		} catch (e) {
			if ('HttpErrorResponse' === e.name) {
				if (e.status === 401) {
					this.offline = false;
				} else if (e.status === 404) {
					this.offline = false;

					if (this.app.getConfig('app', 'start_on_boot',  'daemon', true)) {
						this.startChain();
					}
				}
			}
		}
	}




	/**
	 * Start chain daemon and wallet service
	 * unblock UI
	 */
	startChain() {

		this.chain.startDaemon().then(() => {
			//this.blockUI.stop();
			//this.wallet.startWallet().then(r => r);
		});

		this.chain.getInfo()

	}

	public async exportChain() {
		return await this.chain.exportChain()
	}

	public async importChain() {
		return await this.chain.importChain();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		console.log(changes)
	}
}
