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
	@Input() id: string = '';


	constructor(private chain: BlockchainService) {
	}

	async ngOnInit() {

		if (this.id.length > 0) {
			const data = await this.chain.getBlock(this.id);
			this.block = data['block_header'];
			this.blockData = JSON.parse(data['json']);
			console.log(this.block);
		}

	}


	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

}
