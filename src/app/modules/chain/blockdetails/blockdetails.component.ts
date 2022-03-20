import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlockchainService} from '@module/chain/blockchain.service';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';

@Component({
	selector: 'lthn-chain-blockdetails',
	templateUrl: './blockdetails.component.html'
})
export class BlockdetailsComponent implements OnInit, OnDestroy {

	blockID: string;
	sub: Subscription;
	block: BlockHeader;
	blockData: any;
	@Input() id: string ='';


	constructor(private chain: BlockchainService) {
	}

	ngOnInit(): void {

    	if(this.id.length>0)
		this.sub = this.chain.getBlock(this.id).subscribe((data) => {
			this.block = data.result['block_header'];
			this.blockData = JSON.parse(data.result['json']);

//        this.chain.getTransactions(this.blockData['tx_hashes']).subscribe((data) => {
//          console.log(data)
//            data.txs_as_json = JSON.parse(data.txs_as_json);
//          this.transactions = data
//
//        })
		});
	}



	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

}
