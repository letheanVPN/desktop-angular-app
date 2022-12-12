import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {FileSystemService} from '@service/filesystem/file-system.service';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent implements OnInit{

	public loaded: boolean = false;
	public code: any;
	public apps: any ;
	public market: any = {};
	public url: BehaviorSubject<string> ;

	constructor(public router: Router, private fs: FileSystemService) {}

	public async ngOnInit() {

		this.apps = await this.getAppConfig()
		await this.firstLoad()
		await this.getAppMarket()

	}

	async getAppConfig() {
		try{
			const containers = await fetch('http://localhost:36911/apps/list', {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				}
			})
			return await containers.json()
		}catch (e) {
			return false
		}

	}

	async getAppMarket(dir :string = '') {
		try{
			if(dir.length > 0){
				dir = `?dir=${dir}`
			}
			const containers = await fetch(`http://localhost:36911/apps/marketplace${dir}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				}
			})
			this.market = await containers.json()
		}catch (e) {
			return false
		}

	}

	async installApp(app: any) {
		if(this.apps == undefined){
			this.apps = {}
		}
		if((app.pkg && app.code) && !this.apps[app.code] ) {

			const containers = await fetch('http://localhost:36911/apps/install', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code: app.code, pkg: app.pkg})
			})
			await containers.json()
		}

//		console.log(this.apps)
		return await this.getAppConfig()
	}
	async removeApp(app: any) {
		if(app.code && this.apps[app.code]) {
			const containers = await fetch('http://localhost:36911/apps/remove', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code: app.code})
			})
		   await containers.json()
		}

//		console.log(this.apps)
		return await this.getAppConfig()
	}

	async firstLoad() {
		if(!await this.fs.isFile('data/objects/conf/installed-apps.json')){

			await this.installApp({code: 'server', pkg: 'https://raw.githubusercontent.com/dAppServer/server/main/.itw3.json'})
			await this.installApp({code: 'blockchain-lthn', pkg: 'https://raw.githubusercontent.com/letheanVPN/blockchain-iz/main/.itw3.json'})
			this.apps = await this.getAppConfig()
		}
	}

	public onPayloadReceived($event: any) {
		console.log($event)
	}
}
