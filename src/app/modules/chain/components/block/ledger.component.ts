import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ChartService} from '@module/chart/chart.service';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {interval, Subscription} from 'rxjs';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {BlockchainService} from '@module/chain/blockchain.service';
import {FormControl, Validators} from '@angular/forms';
import {DrawerDirection, DrawerService} from '@swimlane/ngx-ui';

@Component({
	selector: 'lthn-chain-ledger',
	templateUrl: './ledger.component.html',
	providers: [ChartService]
})
export class BlockLedgerComponent implements OnInit, OnDestroy {

	columns: any = [];

	page = {
		size: 25,
		totalElements: 0,
		totalPages: 0,
		pageNumber: 0
	};

	allColumns = [
		{prop: 'height', name: 'app.lthn.chain.words.height', default: true},
		{prop: 'difficulty', name: 'app.lthn.chain.words.difficulty', default: true},
		{prop: 'hash', name: 'app.lthn.chain.words.hash', default: true},
		{prop: 'orphan_status', name: 'app.lthn.chain.words.orphan_status', default: true},
		//{ prop: 'reward', name: 'plugin.lthn.chain.table.th.reward', default: true },
		{prop: 'timestamp', name: 'app.lthn.chain.words.timestamp', default: true},
		//	{ prop: 'block_size', name: 'Block Size', default: true },
		//{ prop: 'depth', name: 'plugin.lthn.chain.table.th.depth', default: true },
		//{ prop: 'major_version', name: 'Block Major Version', default: true },
		//	{ prop: 'minor_version', name: 'Block Minor Version', default: false },
		//	{ prop: 'nonce', name: 'Block Nonce', default: false },
			{ prop: 'num_txes', name: 'app.lthn.chain.words.tx_count', default: true },
		//	{ prop: 'prev_hash', name: 'Last Hash', default: true },
	];
	ColumnMode = ColumnMode;
	blocks: BlockHeader[] ;
	chainInfo: ChainGetInfo;
	@ViewChild('editTmpl', { static: false }) editTmpl: TemplateRef<any>;
	private sub: Subscription[] = [];

	status_daemon: number = 0;
	blockSearch: FormControl;

	constructor(
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


	async ngOnInit() {
		this.blockSearch = new FormControl('', [Validators.required]);

		//this.chain.getInfo()
		this.chainInfo = await this.chain.getInfo();
		if (this.chainInfo) {
			// we have chain data, and it talks to us set to amber
			this.status_daemon = 1;
			//console.log(data)
			// if chain height + 4 to give 2~ blocks to be considered healthy
			if (this.chainInfo.height + 4 > this.chainInfo.target_height) {
				this.status_daemon = 2;
			}
			this.page.totalElements = this.chainInfo.height
		} else {
			this.status_daemon = 0;
		}
		await this.getBlocks()

		this.sub['interval'] = interval(5000).subscribe(async () => this.chainInfo = await this.chain.getInfo());

	}

	async getBlocks() {
		let start_height = this.page.totalElements - this.page.pageNumber * this.page.size - 1
		let end_height = this.page.totalElements - this.page.size - this.page.pageNumber * this.page.size

		this.blocks = await this.chain.getBlocks(Math.max(0, end_height), Math.max(0, start_height));
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
