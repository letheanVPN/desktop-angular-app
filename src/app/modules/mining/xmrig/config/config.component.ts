import {Component} from '@angular/core';
import {BlockchainService} from '@module/chain/blockchain.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';
import 'codemirror/mode/javascript/javascript.js';
@Component({
	selector: 'app-miner-xmrig-config',
	templateUrl: './config.component.html'
})
export class XmrigConfigComponent {

	public config = ''

	constructor(public chain: BlockchainService, private fs: FileSystemService, private notify: NotificationService) {
		this.load().then(() => console.log('loaded'));
	}

	async save() {
		await this.fs.writeFile('conf/xmrig/config.json', this.config)
		this.notify.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Saved Config File'
		})
	}

	async load() {
		this.config = await this.fs.readFile('conf/xmrig/config.json')
	}

}
