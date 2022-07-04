import {Component, OnInit} from '@angular/core';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent implements OnInit{

	public loaded: boolean = false;
	public code: any;
	public apps: any = {};

	constructor() {}

	public async ngOnInit() {

		await this.getAppConfig()

	}

	async getAppConfig() {
		try{
			const containers = await fetch('http://localhost:36911/system/data/object/get', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({group:"apps", object:"installed"})
			})
			this.apps = await containers.json()
			console.log(this.apps)
		}catch (e) {
			return false
		}

	}

	async saveAppConfig() {
		const containers = await fetch('http://localhost:36911/system/data/object/set', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({group:"apps", object:"installed", data:this.apps})
		})
		return await containers.json()
	}

	async installApp(name: string) {
		if(!this.apps[name]) {
			this.apps[name] = true
		}

//		console.log(this.apps)
		await this.saveAppConfig()
	}
	async removeApp(name: string) {
		if(this.apps[name]) {
			delete this.apps[name]
		}

//		console.log(this.apps)
		await this.saveAppConfig()
	}

}
