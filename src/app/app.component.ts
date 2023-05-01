import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {AppConfigService} from '@service/app-config.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
import {MENU_ITEMS} from "@ui/pages/pages-menu";
import {APP_MENU_ITEMS} from "./app-menu";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'lthn',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
	//public menu: boolean;
	public heading = '';
	@ViewChild('sidenav') public sidenav: MatSidenav;
	public currentFlag: any;
	public currentLanguage$: Subscription;
	public currentLanguage: string = 'en';
	public navExpanded: boolean = true;

	public menuItems = [];
	public menu = APP_MENU_ITEMS

	/**
	 * Starts the Angular framework and configures system plugins
	 *
	 * @param {Router} router
	 * @param {ActivatedRoute} activatedRoute
	 * @param {Title} titleService
	 * @param {Meta} metaService
	 * @param {TranslateService} translate
	 * @param app
	 * @param loadingService
	 * @param fs
	 */
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
		private metaService: Meta,
		private translate: TranslateService,
		public config: AppConfigService,
		private fs: FileSystemService
	) {
	}


	public async ngOnInit() {

		try {
			await this.config.fetchServerPublicKey();

			await this.config.loadConfig('conf/app.ini');

		} catch (e) {
			if ('HttpErrorResponse' === e.name) {
				if (e.status === 401) {

				} else if (e.status === 404) {

					await this.config.makeDefault();
					await this.config.loadConfig('conf/app.ini');

				}
			}
		}
		this.translate.setDefaultLang('en');
		this.currentLanguage = this.config.getConfig('app', 'lang') ;
		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use(this.currentLanguage ? this.currentLanguage :this.translate.getBrowserLang());

		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				// this.loadingService.start();
			} else if (event instanceof NavigationEnd) {
				// this.loadingService.complete();
			}
		});
		await this.getMenuConfig();


	}

	public async ngAfterContentInit() {



// 		if (!await this.fs.isFile('data/objects/conf/menu.json')) {
//
// 			try {
// 				this.menuItems = [
// //					{'title': 'menu.text.dashboard', 'icon': ['fas', 'gauge'], 'url': ['/', 'dashboard']},
// 					{'title': 'menu.text.chain', 'icon': ['fas', 'link'], 'url': ['/', 'chain']},
// 					{'title': 'menu.text.wallet', 'icon': ['fas', 'wallet'], 'url': ['/', 'wallet']},
// //					{'title': 'menu.text.mining', 'icon': ['fas', 'person-digging'], 'url': ['/', 'mining', 'xmrig']}
// 				];
//
// 				const containers = await fetch('http://localhost:36911/config/object/set', {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json'
// 					},
// 					body: JSON.stringify({group: 'conf', object: 'menu', data: this.menuItems})
// 				});
// 				await containers.json();
// 			} catch (e) {
// 				//return false;
// 			}
//
// 		}
//
//
 		this.updateMeta();
	}

	/**
	 * Dispatch a language change request
	 *
	 * @param {string} lang
	 */
	changeLanguage(lang: string) {
		this.config.setConfig('app', 'lang', lang)
		this.currentLanguage = lang;
		this.translate.use(lang);
	}


	/**
	 * creates subscriptions for multi lingual page meta
	 */
	updateMeta() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				const rt = this.getChild(this.activatedRoute);
				// rt.data.subscribe((data) => {
				// 	this.translate.get(data.title).subscribe((res: string) => {
				// 		this.titleService.setTitle(res);
				// 	});
				//
				// 	this.heading = data.heading;
				// 	if (data.description) {
				//
				// 		this.translate.get(data.description).subscribe(() => {
				// 			this.metaService.updateTag({
				// 				name: 'description',
				// 				content: data.description
				// 			});
				// 		});
				//
				// 	} else {
				// 		this.metaService.removeTag('name=\'description\'');
				// 	}
				//
				// 	if (!data.robots) {
				// 		this.metaService.updateTag({
				// 			name: 'robots',
				// 			content: 'nofollow,noindex'
				// 		});
				// 	} else {
				// 		this.metaService.updateTag({
				// 			name: 'robots',
				// 			content: 'follow,index'
				// 		});
				// 	}
				// });
			});
	}


	/**
	 * Angular router helper
	 *
	 * @param {ActivatedRoute} activatedRoute
	 * @returns {any}
	 */
	getChild(activatedRoute: ActivatedRoute) {
		if (activatedRoute.firstChild) {
			return this.getChild(activatedRoute.firstChild);
		} else {
			return activatedRoute;
		}
	}

	public getChildItems() {
		console.log(this.activatedRoute.url);
	}

	async getMenuConfig() {
		try {
			const containers = await fetch('http://localhost:36911/config/object/get', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({group: 'conf', object: 'menu'})
			});
			return this.menuItems = await containers.json();
		} catch (e) {
			return false;
		}

	}

    protected readonly MENU_ITEMS = MENU_ITEMS;
}
