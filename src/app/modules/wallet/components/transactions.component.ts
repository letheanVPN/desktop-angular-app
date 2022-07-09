import {Component, Input, OnInit} from '@angular/core';

import {UntypedFormControl} from '@angular/forms';
import {WalletRpcService} from '@service/wallet.rpc.service';
import {GetTransfersIn, GetTransfersOut} from '@module/wallet/interfaces';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'lthn-wallet-transactions',
	templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
	@Input() name?: string = '';
	@Input() opts: GetTransfersIn = {
		in: true,
		out: true,
		pending: true,
		failed: true,
		pool: true,
	};

	filename = new UntypedFormControl('');
	password = new UntypedFormControl('');

	rows: GetTransfersOut[] = [];



	columns = [
		{name: 'Amount'}, {name: 'Fee'}, {name: 'Height'}, {name: 'Note'}, {name: 'Payment ID'},
		{name: 'Timestamp'}, {name: 'txid'}, {name: 'Type'}, {name: 'Unlock Time', prop: "unlock_time"}];

	ColumnMode = ColumnMode;

	constructor(private wallet: WalletRpcService, private route: ActivatedRoute) {
		this.name = this.route.snapshot.paramMap.get('id')
	}

	async ngOnInit() {
		try {
			await this.loadTransactions()
		} catch (e) {

		}

	}

	async loadTransactions() {

		this.rows = await this.wallet.getTransfers(this.opts).then((data) => Object.values(data).flat());
		console.log(this.rows);

	}
}
