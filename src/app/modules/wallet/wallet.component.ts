import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {WalletService} from '@module/wallet/wallet.service';
import {Balance} from '@module/wallet/interfaces';
import {select, Store} from '@ngrx/store';
import * as WalletActions from '@module/wallet/data';
import {Subscription} from 'rxjs';

@Component({
	selector: 'lthn-app-wallet',
	templateUrl: './wallet.component.html',
	styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, OnDestroy, AfterViewInit {
	public balance:  Balance | Promise<Balance>;

	public wallets: string[] = [];

	public openedWallet: string = '';
	public showtx: boolean = false;
	public txnSelection: any = {
		in: true,
		out: true,
		pending: true,
		failed: true,
		pool: true,
		filter_by_height: false,
		min_height: null,
		max_height: null
	};
	private subs$: Subscription[] = []
	constructor(private wallet: WalletService, private store: Store) {}

	ngOnInit() {



		this.subs$['wallets'] = this.store.pipe(select(WalletActions.selectWallets)).subscribe((data) => {
			if(data && data.length > 0) {
				this.wallets = data
				this.subs$['openedWallet'] = this.store.pipe(select(WalletActions.selectOpenedWallet)).subscribe((wallet) => {
					if(wallet) {
						this.openedWallet = wallet
						this.store.dispatch(WalletActions.WalletStartPolling())
					}
				})

			}
		})

	 }

	public ngAfterViewInit() {
		console.log('hi')
		this.wallet.startWalletService()
	}

	ngOnDestroy(): void {
		for (let sub of this.subs$){
			sub.unsubscribe();
		}
		this.store.dispatch(WalletActions.WalletStopPolling())
		console.log('WalletComponent DESTROY');
	}

	openWallet(key: string){
		this.store.dispatch(WalletActions.switchWallet({address: key}))
	}

	async getBalance() {
		this.balance = await this.wallet.getBalance().then((data) => data)
	}

	public async toggle(col) {
		await this.wallet.loadTransfers(this.txnSelection);
		this.txnSelection[col] = !!this.txnSelection[col]
	}

	public isChecked(col) {
		return this.txnSelection[col]
	}
}
