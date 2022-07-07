import {Component, OnInit} from '@angular/core';

import {UntypedFormControl} from '@angular/forms';
import {WalletRpcService} from '@service/wallet.rpc.service';

import {nameNotTakenValidator} from 'src/app/modules/wallet/validators';
import {WalletService} from 'src/app/modules/wallet/wallet.service';
import {Router} from '@angular/router';

@Component({
	selector: 'lthn-wallet-new',
	templateUrl: './wallet-new.component.html'
})
export class WalletNewComponent implements OnInit {
	wallet_name: UntypedFormControl;
	password: UntypedFormControl;
	password_confirm: UntypedFormControl;
	constructor(private walletRpc: WalletRpcService, private wallet: WalletService, private router: Router) {}

	ngOnInit(): void {
		this.wallet_name = new UntypedFormControl('', [nameNotTakenValidator(this.wallet.walletList())]);
		this.password = new UntypedFormControl('')
		this.password_confirm = new UntypedFormControl('')
	}

	createWallet() {
		if (this.password.value === this.password_confirm.value) {

				this.walletRpc.createWallet({
					filename: this.wallet_name.value,
					password: this.password.value,
					language: 'English'
				}).then((data) => {
					if(data.status === 200){
						this.router.navigate(['/', 'wallet', this.wallet_name.value]).catch(console.error)
					}
				})

		}
	}
}
