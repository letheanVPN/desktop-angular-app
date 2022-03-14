import {Component, Input, OnInit} from '@angular/core';

import {FormControl} from '@angular/forms';
import {WalletService} from '@module/wallet/wallet.service';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

@Component({
	selector: 'lthn-wallet-open',
	templateUrl: './open.component.html'
})
export class OpenComponent implements OnInit {
	@Input() name?: string = '';

	filename = new FormControl('');
	password = new FormControl('');
	/**
	 * Lists the wallets known
	 *
	 * @type {string[]}
	 */
	public wallets: string[];


	constructor(private wallet: WalletService, private notificationService: NotificationService) {

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
		//this.store.dispatch(openWallet({address: name, password: (<HTMLInputElement>document.getElementById(name + '-pass')).value}))
		return this.wallet.openWallet({
			filename: name,
			password: (<HTMLInputElement>document.getElementById(name + '-pass')).value
		}).then(() => this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Loaded Wallet!',
			body: name
		}))

	}
}
