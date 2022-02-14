import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {getChainInfo} from '@module/chain/data';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {Observable} from 'rxjs';

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
	private chainInfo: Observable<ChainGetInfo>;

	constructor(public dialog: MatDialog, private store: Store) {}

	public ngOnInit() {
		this.chainInfo = this.store.pipe(select(getChainInfo))

		this.chainInfo.subscribe((data) => {
			if(data){
				// we have chain data, and it talks to us set to amber
				this.status_daemon = 1
				//console.log(data)
				// if chain height + 4 to give 2~ blocks to be considered healthy
				if(data.height + 4 > data.target_height){
					this.status_daemon = 2
				}
			}else{
				this.status_daemon = 0
			}

		})
	}
}
