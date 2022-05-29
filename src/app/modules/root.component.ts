import {Component} from '@angular/core';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent {
	public posts: any = [];

	public hasCLI: boolean;
	public loaded: boolean = false;
	public downloadingCLI: boolean;
	public code: any;
    isSelected: any;
    downloading: any= false;
	downloadStats: {
		file: string,
		dir: string,
		fullPath: string,
		size: number,
		total: number,
	}
	constructor() {}

	renderWebView() {

	}

	onDelete() {
		console.log('yo')
	}
}
