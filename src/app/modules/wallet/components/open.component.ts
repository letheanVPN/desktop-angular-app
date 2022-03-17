import {Component, Input, OnInit} from '@angular/core';

import {WalletService} from '@module/wallet/wallet.service';
import {AlertService, NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

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


	constructor(private wallet: WalletService, private notificationService: NotificationService, public alertService: AlertService) {

	}

	/**
	 * get list of filesystem wallets
	 */
	ngOnInit(): void {
		this.wallets = this.wallet.getWalletList()
	}

	/**
	 * Unlock wallet
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	unlockWallet(name: string) {

		const subject = this.alertService.prompt({
			title: 'Wallet Password',
			content: 'Please enter the wallet password.'
		});
		subject.subscribe({
			next: (v) => {
				this.wallet.openWallet({filename: name, password: v.data.data}).then(async (data) => {
					console.log(data)
					this.name = name;
				}).catch((err) => console.error(err)).then(() => this.notificationService.create({
					type: NotificationType.html,
					styleType: NotificationStyleType.success,
					title: 'Loaded Wallet!',
					body: name
				}));
			},
			error: (err) => console.log('Prompt err', err)
		});

	}


}
