import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {interval, Observable, Subscription} from 'rxjs';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {BlockchainService} from '@module/chain/blockchain.service';
import {WalletService} from '@module/wallet/wallet.service';
import {getChainInfo} from '@module/chain/data';

@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent implements OnInit, OnDestroy {
	public posts: any = [];

	public hasCLI: boolean;
	public loaded: boolean = false;
	public downloadingCLI: boolean;
	public chainInfo: Observable<ChainGetInfo>;
	ColumnMode = ColumnMode;
	public blocks: Observable<{ headers: BlockHeader[] }>;
	private sub: Subscription[] = [];


	constructor(
		private chain: BlockchainService,
		private wallet: WalletService,
		private store: Store
	) {

	}

	public ngOnDestroy() {
		this.sub.forEach((s) => s.unsubscribe());
	}

	ngOnInit() {
		this.chain.getInfo()
		this.sub['interval'] = interval(5000).subscribe(() => this.chain.getInfo());
		this.sub['info'] = this.store.pipe(select(getChainInfo)).subscribe((data) => {
			if (data) {
				this.loaded = true;
				this.chain.getBlocks(data.height - 50, data.height - 1);
			}
		});
	}

	startBlockchain() {
		return this.chain.startDaemon();
	}

	startWallet() {
		return this.wallet.startWallet();
	}

	renderWebView() {
//		const client = new Client([
//			'https://api.hive.blog',
//			'https://api.hivekings.com',
//			'https://anyx.io',
//			'https://api.openhive.network'
//		]);
//		const that = this;
//		client.database
//			.getDiscussions('trending', {tag: 'dvpn', limit: 5})
//			.then(function (discussions) {
//				that.posts = discussions;
//			});
	}
}
