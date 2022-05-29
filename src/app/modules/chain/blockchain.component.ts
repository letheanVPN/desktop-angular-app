import {Component} from '@angular/core';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {BlockchainService} from '@module/chain/blockchain.service';

@Component({
	selector: 'lthn-chain',
	templateUrl: './blockchain.component.html'
})
export class BlockchainComponent {

	blocks: BlockHeader[];
	chainInfo: ChainGetInfo;

	constructor(public chain: BlockchainService) {}

}
