import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ChartService} from '@module/chart/chart.service';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {select, Store} from '@ngrx/store';
import {getChainBlocks, getChainInfo} from '@module/chain/data';
import {interval, Observable, Subscription} from 'rxjs';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {BlockchainService} from '@module/chain/blockchain.service';
import {FormControl, Validators} from '@angular/forms';
import {DrawerDirection, DrawerService} from '@swimlane/ngx-ui';

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
	@ViewChild('editTmpl', { static: false }) editTmpl: TemplateRef<any>;
	private sub: Subscription[] = [];
	recentTxs: any;
	buildType: string;
	status_daemon: number = 0;
	blockSearch: FormControl;
	start_height: number = null;
	end_height: number = null;
	constructor(private store: Store,
				private chain: BlockchainService,
				private drawerService: DrawerService) {

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
				// we have chain data, and it talks to us set to amber
				this.status_daemon = 1;
				//console.log(data)
				// if chain height + 4 to give 2~ blocks to be considered healthy
				if (data.height + 4 > data.target_height) {
					this.status_daemon = 2;
				}
				this.page.totalElements = data.height
				this.getBlocks()
			} else {
				this.status_daemon = 0;
			}
		});
	}

	getBlocks(){
		let start_height = this.page.totalElements - this.page.pageNumber * this.page.size-1
		let end_height = this.page.totalElements - this.page.size - this.page.pageNumber * this.page.size

		this.chain.getBlocks(Math.max(0,end_height),  Math.max(0,start_height));
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
	openDrawer(id) {
		this.drawerService.create({
			direction: DrawerDirection.Left,
			template: this.editTmpl,
			closeOnOutsideClick: true,
			context: { id}

		});
	}

}
