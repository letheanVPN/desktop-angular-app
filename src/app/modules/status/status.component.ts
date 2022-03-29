import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockchainService} from '@module/chain/blockchain.service';

@Component({
	selector: 'lthn-app-status',
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
	status_daemon: any;
	status_secure: any;
	status_private: any;
	status_annon: any;
	private chainInfo: ChainGetInfo;

	constructor(public dialog: MatDialog, private chain: BlockchainService) {}

	public async ngOnInit() {
		this.chainInfo = await this.chain.getInfo()

		if (this.chainInfo) {
			// we have chain data, and it talks to us set to amber
			this.status_daemon = 1
			//console.log(data)
			// if chain height + 4 to give 2~ blocks to be considered healthy
			if (this.chainInfo.height + 4 > this.chainInfo.target_height) {
				this.status_daemon = 2
			}
		} else {
			this.status_daemon = 0
		}
	}
}
