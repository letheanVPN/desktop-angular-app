import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WalletService} from '@module/wallet/wallet.service';
import {Router} from '@angular/router';

@Component({
	selector: 'lthn-app-wallet',
	templateUrl: './wallet.component.html',
	styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, AfterViewInit {

	public wallets: string[] = [];

	constructor(private wallet: WalletService, private router: Router) {}


	public ngAfterViewInit() {
		this.wallet.startWalletService()
	}

	public ngOnInit(): void {
		this.wallets = this.wallet.walletList()
	}

	public openWallet(name: string){
		this.router.navigate(['/','wallet','details', name]).catch((err) => console.log(err))
	}

}
