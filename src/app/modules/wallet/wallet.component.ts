import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WalletService} from '@module/wallet/wallet.service';
import {AlertService} from '@swimlane/ngx-ui';

@Component({
	selector: 'lthn-app-wallet',
	templateUrl: './wallet.component.html',
	styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, AfterViewInit {

	public wallets: string[] = [];
	name: string = ''
	balance:any = {}
	constructor(public wallet: WalletService, public alertService: AlertService) {}


	public ngAfterViewInit() {
		this.wallet.startWalletService()
	}

	public ngOnInit(): void {
		this.wallets = this.wallet.walletList()
		this.wallet.getActiveAddress()
	}

	public openWallet(name: string){
		console.log(name)
		const subject = this.alertService.prompt({
			title: 'Wallet Password',
			content: 'Please enter the wallet password.'
		});

		subject.subscribe({
			next: (v) => {
				this.wallet.openWallet({filename: name, password: v.data}).then(async (data) => {
					console.log(data)
					this.name = name;
				}).catch((err) => console.error(err));
			},
			error: (err) => console.log('Prompt err', err)
		});


		//this.router.navigate(['/','wallet','details', name]).catch((err) => console.log(err))
	}

}
