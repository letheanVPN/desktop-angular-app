import {Component} from '@angular/core';
import {FileSystemService} from "@service/filesystem/file-system.service";

@Component({
    selector: 'lthn-apps',
    templateUrl: './apps.component.html',
    styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
    public apps: any;
    public market: any = {};

    constructor(private fs: FileSystemService) {
    }

    public async ngOnInit() {

        this.apps = await this.getAppConfig()
        await this.getAppMarket()

    }

    async getAppConfig() {
        try {
            const containers = await fetch('http://localhost:36911/apps/installed', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            return await containers.json()
        } catch (e) {
            return false
        }

    }

    async getAppMarket(dir: string = '') {
        try {
            if (dir.length > 0) {
                dir = `?dir=${dir}`
            }
            const containers = await fetch(`http://localhost:36911/apps/marketplace${dir}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            this.market = await containers.json()
        } catch (e) {
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

}
