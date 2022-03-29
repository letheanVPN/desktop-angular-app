import {Component} from '@angular/core';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
import {FormControl} from '@angular/forms';
import {BlockchainService} from '@module/chain/blockchain.service';

@Component({
	selector: 'lthn-chain',
	templateUrl: './blockchain.component.html'
})
export class BlockchainComponent {

	blocks: BlockHeader[];
	chainInfo: ChainGetInfo;

	recentTxs: any;
	buildType: string;
	status_daemon: number = 0;
	blockSearch: FormControl;
	start_height: number = null;
	end_height: number = null;

	constructor(public chain: BlockchainService) {


	}


	async ngOnInit() {

	}


}
