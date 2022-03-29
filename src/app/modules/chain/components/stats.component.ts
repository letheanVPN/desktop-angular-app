import {Component} from '@angular/core';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockchainService} from '@module/chain/blockchain.service';

@Component({
	selector: 'lthn-chain-stats',
	templateUrl: './stats.component.html'
})
export class BlockchainStatsComponent {


	chainInfo: ChainGetInfo;

	constructor(public chain: BlockchainService) {}

}
