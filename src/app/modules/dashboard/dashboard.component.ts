import {Component, OnInit} from '@angular/core';
import {AppConfigService} from "@service/app-config.service";
import {ConfigService} from "../../../typescript-angular";

@Component({
    selector: 'lthn-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    config: any = {};

    constructor(public app: ConfigService) {


// console.log(this.config);

    }

    ngOnInit(): void {
        try {
            this.app.getConfig({group: 'app', object: 'config'}).subscribe((config) => {
                this.config = config;
                console.log(this.config);
            })
        } catch (e) {
            this.app.setConfig({group: 'app', object: 'config', data: "{}"}).subscribe((config) => {
                console.log(config);
            });
        }
    }



}
