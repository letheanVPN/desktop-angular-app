import {Component, OnDestroy, OnInit} from '@angular/core';
//import {AppConfigService} from '@service/app-config.service';

@Component({
	selector: 'lthn-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
	setting_tab = 'general';

	constructor(
		//private config: AppConfigService
	) {}

	ngOnInit(): void {
		console.log('SettingsComponent INIT');
	}

	ngOnDestroy(): void {
		console.log('SettingsComponent DESTROY');
	}
}
