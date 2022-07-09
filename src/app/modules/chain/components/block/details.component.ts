import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlockchainService} from '@module/chain/blockchain.service';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';

@Component({
	selector: 'lthn-chain-block-details',
	templateUrl: './details.component.html'
})
export class BlockDetailsComponent implements OnInit, OnDestroy {

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

		}

	}


	ngOnDestroy(): void {
		if(this.sub) this.sub.unsubscribe();
	}

}
