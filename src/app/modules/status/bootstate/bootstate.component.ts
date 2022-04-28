import {Component, OnInit} from '@angular/core';
import {StepperPosition} from '@swimlane/ngx-ui';
import {AppConfigService} from '@service/app-config.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
import {BlockchainService} from '@module/chain/blockchain.service';
import {interval, Subscription} from 'rxjs';
import {WebsocketService} from '@service/websocket.service';

@Component({
	selector: 'lthn-app-bootstate',
	templateUrl: './bootstate.component.html',
	styleUrls: ['./bootstate.component.scss']
})
export class BootstateComponent implements OnInit {

	readonly StepperPosition = StepperPosition;

	downloadStats: {
		file: string,
		dir: string,
		fullPath: string,
		size: number,
		total: number,
	}
	readonly steps: Array<{ readonly title: string; readonly icon?: string; readonly completeIcon?: string }> = [
		{title: 'app.boot.server-check', icon: 'ngx-icon ngx-server'},
		{title: 'app.boot.folder-check', icon: 'ngx-icon ngx-folder'},
		{title: 'app.boot.download-check', icon: 'ngx-icon ngx-cloud-download'},
		{title: 'app.boot.start-runtime', icon: 'ngx-icon ngx-workstation'}
	];
	index = 0;
	readonly = true;
	position = StepperPosition.Top;

	authNeeded = false;
	downloadNeeded = false;
	downloaded: Subscription;
	serverCheck: Subscription;

	constructor(private app: AppConfigService, private fs: FileSystemService, private chain: BlockchainService, private ws: WebsocketService) {
	}

	async ngOnInit() {

		await this.checkServerAlive();
	}

	async initApp() {
		try {

			await this.app.loadConfig('conf/app.ini');
			await this.app.fetchServerPublicKey();
			if (this.app.getConfig('daemon', 'start_on_boot', true)) {
				await this.chain.startDaemon();
			}
		} catch (e) {
			console.log(e);
		}

		this.app.online = true;
	}

	next() {
		if (this.index < this.steps.length - 1) {
			this.index++;
		}
	}

	async checkServerAlive() {
		this.serverCheck = interval(1000).subscribe(
			async () => {
				try {
					await this.app.loadConfig('conf/app.ini');
					await this.initApp()
				} catch (e) {
					//return false;
				}
				this.next();
				this.serverCheck.unsubscribe()
				await this.checkFolderStructure()
				return true;
			})
	}

	async checkFolderStructure() {
		try {
			if (!await this.fs.isDir('conf')) {
				await this.fs.mkDir('conf');
				await this.app.makeDefault();
			}
			if (!await this.fs.isDir('data')) {
				await this.fs.mkDir('data');
			}
			if (!await this.fs.isDir('users')) {
				await this.fs.mkDir('users');
			}
			if (!await this.fs.isDir('wallets')) {
				await this.fs.mkDir('wallets');
			}
			if (!await this.fs.isDir('cli')) {
				await this.fs.mkDir('cli');
			}

		} catch (e) {
			if ('HttpErrorResponse' === e.name) {
				if (e.status === 401) {
					this.authNeeded = true;
				}
			}
			return false;
		}
		this.next();
		await this.checkDownloads()
		return true;

	}

	async checkDownloads() {

		this.downloadProgress()
		try {

			if (await this.fs.listFiles('cli').then(res => res.length) < 3) {
				this.downloadNeeded = true;
				this.chain.downloadDaemons().then(() => console.log('daemons downloaded'));
				//return false;
			}


		} catch (e) {
			if ('HttpErrorResponse' === e.name) {
				if (e.status === 401) {
					this.authNeeded = true;

				}
			}
			return false;
		}

		return this.downloaded = interval(1000).subscribe(
			async () => {
				if (await this.checkDownloaded()) {
					this.next();
					this.downloaded.unsubscribe();
					await this.initApp()

				}
			}
		);




	}

	async checkDownloaded() {
		console.log('checking for cli');
		return await this.fs.listFiles('cli').then(res => res.length) > 3;

	}

	downloadProgress(){
		let that = this;
		const subject = this.ws.connect().subscribe((data) => {
			that.downloadStats = JSON.parse(atob(data[1]));
			if(this.downloadStats.total == this.downloadStats.size){
				subject.unsubscribe();
			}
		})
		this.ws.sendMessage('daemon:download')

	}
}

