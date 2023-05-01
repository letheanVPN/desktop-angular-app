import {Component, Input, OnInit} from '@angular/core';

import {WalletService} from '@module/wallet/wallet.service';

@Component({
	selector: 'lthn-wallet-open',
	templateUrl: './open.component.html'
})
export class OpenComponent implements OnInit {
	@Input() name?: string = '';

	/**
	 * Lists the wallets known
	 *
	 * @type {string[]}
	 */
	public wallets: string[];


	constructor(private wallet: WalletService) {

	}

	/**
	 * get list of filesystem wallets
	 */
	async ngOnInit() {
		this.wallets = await this.wallet.getWalletList()
	}

	/**
	 * Unlock wallet
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	unlockWallet(name: string) {
		this.wallet.startWalletService()
		// const subject = this.alertService.prompt({
		// 	title: 'Wallet Password',
		// 	content: 'Please enter the wallet password.'
		// });
		// subject.subscribe({
		// 	next: (v) => {
		// 		this.loadingService.start()
		// 		this.wallet.openWallet({filename: name, password: v.data.data}).then(async () => {
		// 			this.name = name;
		// 			this.notificationService.create({
		// 				type: NotificationType.html,
		// 				styleType: NotificationStyleType.success,
		// 				title: 'Loaded Wallet!',
		// 				body: name
		// 			})
		// 			this.loadingService.complete()
		// 		}).catch((err) => console.error(err))
		// 	},
		// 	error: (err) => console.log('Prompt err', err)
		// });

	}


}
