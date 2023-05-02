import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlockchainService} from '@module/chain/blockchain.service';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {ActivatedRoute} from "@angular/router";

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


	constructor(private chain: BlockchainService, private route: ActivatedRoute) {
	}

	async ngOnInit() {

		this.id = this.route.snapshot.paramMap.get('id')
		if (this.id.length > 0) {
			const data = await this.chain.getBlock(this.id);
			this.block = data['block_header'];
			this.blockData = JSON.parse(data['json']);
// console.log(this.blockData)
		}

	}


	ngOnDestroy(): void {
		if(this.sub) this.sub.unsubscribe();
	}

}
