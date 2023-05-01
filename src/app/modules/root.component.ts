import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent {

	public loaded: boolean = false;
	public code: any;
	public apps: any ;

	public url: BehaviorSubject<string> ;

	constructor(public router: Router) {}

}
