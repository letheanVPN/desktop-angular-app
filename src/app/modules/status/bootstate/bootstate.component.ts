import {Component, OnInit} from '@angular/core';
import {StepperPosition} from '@swimlane/ngx-ui';
import {AppConfigService} from '@service/app-config.service';
import {interval, Subscription} from 'rxjs';
import {FileSystemService} from '@service/filesystem/file-system.service';

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
	serverCheck: Subscription;

	constructor(private app: AppConfigService, private fs: FileSystemService) {
	}

	async ngOnInit() {

		await this.checkServerAlive();
	}

	async initApp() {
		try {

			await this.app.loadConfig('conf/app.ini');
			await this.app.fetchServerPublicKey();

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
		if (await this.checkFolderStructure()) {
			this.serverCheck = interval(1000).subscribe(
				async () => {


					try {
						await this.app.loadConfig('conf/app.ini');
						await this.initApp()
					} catch (e) {
						//return false;
					}
					this.next();
					this.serverCheck.unsubscribe();
					await this.initApp()
					return true;

				})
		}

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
			return false;
		}
		return true;

	}

}

