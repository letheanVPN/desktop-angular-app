import {Component} from '@angular/core';
import { Observable} from 'rxjs';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {BlockHeader} from '@module/chain/interfaces/types/blockHeader';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent {
	public posts: any = [];

	public hasCLI: boolean;
	public loaded: boolean = false;
	public downloadingCLI: boolean;
	public chainInfo: Observable<ChainGetInfo>;
	ColumnMode = ColumnMode;
	public blocks: Observable<{ headers: BlockHeader[] }>;


	constructor() {}

	renderWebView() {
//		const client = new Client([
//			'https://api.hive.blog',
//			'https://api.hivekings.com',
//			'https://anyx.io',
//			'https://api.openhive.network'
//		]);
//		const that = this;
//		client.database
//			.getDiscussions('trending', {tag: 'dvpn', limit: 5})
//			.then(function (discussions) {
//				that.posts = discussions;
//			});
	}
}
