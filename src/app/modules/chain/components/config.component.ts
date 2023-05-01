import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '@module/chain/blockchain.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
// import 'codemirror/mode/properties/properties.js';
@Component({
	selector: 'lthn-chain-config',
	templateUrl: './config.component.html'
})
export class BlockchainConfigComponent implements OnInit {

	public config = ''

	constructor(public chain: BlockchainService, private fs: FileSystemService) {

	}

	async ngOnInit() {
		this.load();
	}

	async save() {
		await this.fs.writeFile('conf/lthn/letheand.conf', this.config)
		// this.notify.create({
		// 	type: NotificationType.html,
		// 	styleType: NotificationStyleType.success,
		// 	title: 'Saved Config File'
		// })
	}

	async load() {
		this.config = await this.fs.readFile('conf/lthn/letheand.conf')
	}

}
