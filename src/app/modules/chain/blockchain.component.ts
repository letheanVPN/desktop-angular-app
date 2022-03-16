import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChartService} from '@module/chart/chart.service';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {select, Store} from '@ngrx/store';
import {getChainBlocks, getChainInfo} from '@module/chain/data';
import {interval, Observable, Subscription} from 'rxjs';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {BlockchainService} from '@module/chain/blockchain.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'lthn-chain',
	templateUrl: './blockchain.component.html',
	providers: [ChartService]
})
export class BlockchainComponent implements OnInit, OnDestroy {

	columns: any = [];

	page = {
		size: 25,
		totalElements: 0,
		totalPages: 0,
		pageNumber: 0
	};

	allColumns = [
		{prop: 'height', name: 'plugin.lthn.chain.table.th.height', default: true},
		{prop: 'difficulty', name: 'plugin.lthn.chain.table.th.difficulty', default: true},
		{prop: 'hash', name: 'plugin.lthn.chain.table.th.hash', default: true},
		{prop: 'orphan_status', name: 'plugin.lthn.chain.table.th.orphan_status', default: true},
		//{ prop: 'reward', name: 'plugin.lthn.chain.table.th.reward', default: true },
		{prop: 'timestamp', name: 'plugin.lthn.chain.table.th.timestamp', default: true}
		//	{ prop: 'block_size', name: 'Block Size', default: true },
		//{ prop: 'depth', name: 'plugin.lthn.chain.table.th.depth', default: true },
		//{ prop: 'major_version', name: 'Block Major Version', default: true },
		//	{ prop: 'minor_version', name: 'Block Minor Version', default: false },
		//	{ prop: 'nonce', name: 'Block Nonce', default: false },
		//	{ prop: 'num_txes', name: 'Transactions', default: true },
		//	{ prop: 'prev_hash', name: 'Last Hash', default: true },
	];
	ColumnMode = ColumnMode;
	blocks: Observable<{ headers: BlockHeader[] }>;
	chainInfo: Observable<ChainGetInfo>;

	private sub: Subscription[] = [];
	recentTxs: any;
	buildType: string;
	status_daemon: number = 0;
	blockSearch: FormControl;

	constructor(private store: Store,
				private chain: BlockchainService) {

		this.allColumns.forEach((col) => {
			if (col.default) {

				this.columns.push(
					col
				);
			}
		});
	}


	ngOnInit(): void {
		this.blockSearch = new FormControl('', [Validators.required]);

		//this.chain.getInfo()
		this.chainInfo = this.store.pipe(select(getChainInfo));
		this.blocks = this.store.pipe(select(getChainBlocks));

		this.sub['interval'] = interval(5000).subscribe(() => this.chain.getInfo());
		this.sub['info'] = this.store.pipe(select(getChainInfo)).subscribe((data) => {
			if (data) {
				console.log(this.page)
				// we have chain data, and it talks to us set to amber
				this.status_daemon = 1;
				//console.log(data)
				// if chain height + 4 to give 2~ blocks to be considered healthy
				if (data.height + 4 > data.target_height) {
					this.status_daemon = 2;
				}
				this.page.totalElements = data.height
				console.log((data.height - this.page.size ) - (this.page.size - (this.page.size*this.page.pageNumber)), data.height - (this.page.size*this.page.pageNumber)-1)
				this.getBlocks((data.height - this.page.size ) - (this.page.size - (this.page.size*this.page.pageNumber)), data.height - (this.page.size*this.page.pageNumber)-1);
			} else {
				this.status_daemon = 0;
			}
		});
	}

	getBlocks(start_height, end_height){
		this.chain.getBlocks(start_height, end_height);
	}

	toggle(col) {
		const isChecked = this.isChecked(col);

		if (isChecked) {
			this.columns = this.columns.filter(c => {
				return c.name !== col.name;
			});
		} else {
			this.columns.push(col);
		}
	}

	isChecked(col) {
		return (
			this.columns.find(c => {
				return c.name === col.name;
			}) !== undefined
		);
	}

	public ngOnDestroy() {
		this.sub.forEach((s) => s.unsubscribe());
	}

}
