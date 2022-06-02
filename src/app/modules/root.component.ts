import {Component} from '@angular/core';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent {

	public loaded: boolean = false;
	public code: any;

	constructor() {}

}
