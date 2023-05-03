import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {WalletService} from '@module/chain/wallet/wallet.service';
import {nameNotTakenValidator} from '@module/chain/wallet/validators';

@Component({
	selector: 'lthn-wallet-restore',
	templateUrl: './restore.component.html'
})

export class RestoreComponent implements OnInit {
	restoreWalletForm : UntypedFormGroup;

	constructor(private wallet: WalletService) {
	}

	ngOnInit(): void {
		this.restoreWalletForm = new UntypedFormGroup({
			filename: new UntypedFormControl('', [nameNotTakenValidator(this.wallet.walletList())]),
			address: new UntypedFormControl(''),
			restore_height: new UntypedFormControl('0'),
			autosave_current: new UntypedFormControl(true),
			password: new UntypedFormControl(''),
			password_confirm: new UntypedFormControl(''),
			spendkey: new UntypedFormControl(''),
			viewkey: new UntypedFormControl(''),
			viewonly_wallet: new UntypedFormControl(false),
		});
	}

	restoreWallet() {

		this.wallet.restoreWallet({
			filename: this.restoreWalletForm.value.filename,
			address: this.restoreWalletForm.value.address,
			restore_height: this.restoreWalletForm.value.restore_height,
			autosave_current: this.restoreWalletForm.value.autosave_current,
			password: this.restoreWalletForm.value.password,
			spendkey:
			(
				this.restoreWalletForm.value.viewonly_wallet ?
					'' : this.restoreWalletForm.value.spendkey
			)
			,
			viewkey: this.restoreWalletForm.value.viewkey
		});
	}
}
