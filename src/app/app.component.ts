import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';
import {changeLanguage, selectLanguage, toggleHideNavigation} from '@module/settings/data';
import { Subscription} from 'rxjs';
import {BlockchainService} from '@module/chain/blockchain.service';
import {ChainGetInfo} from '@module/chain/interfaces/props/get_info';
import {AppConfigService} from '@service/app-config.service';
import { LoadingService } from '@swimlane/ngx-ui';

@Component({
	selector: 'lthn-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
	public menu: boolean;
	public heading = '';

	@ViewChild('sidenav') public sidenav: MatSidenav;
	public currentFlag: any;
	public currentLanguage$: Subscription;
	public currentLanguage: string;
	public navExpanded: boolean = true;
	searchValue = '';
	filteredNavigationTree: any[];
	private sub: Subscription[] = [];
	public chainInfo: ChainGetInfo;
	navigationTree: any[] = [
		{
			name: 'menu.text.dashboard',
			route: 'dashboard',
			icon: 'circles'

		},
		{
			name: 'menu.text.blockchain',
			route: 'chain',
			icon: 'assets'
		},
		{
			name: 'menu.text.wallet',
			route: 'wallet',
			icon: 'circuit-board'
		}
	];
	public offline: boolean = false;

	/**
	 * Starts the Angular framework and configures system plugins
	 *
	 * @param {Router} router
	 * @param {ActivatedRoute} activatedRoute
	 * @param {Title} titleService
	 * @param {Meta} metaService
	 * @param {TranslateService} translate
	 * @param {Store} store
	 * @param {BlockchainService} chain
	 * @param app
	 * @param loadingService
	 */
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
		private metaService: Meta,
		private translate: TranslateService,
		private store: Store,
		private chain: BlockchainService,
		private app: AppConfigService,
		private loadingService: LoadingService
	) {

		translate.setDefaultLang('en');
		let lang = translate.getBrowserLang();
		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use(lang ? lang : 'en');

		this.router.events.subscribe((event) => {
			if(event instanceof NavigationStart) {
				this.loadingService.start();
			} else if(event instanceof NavigationEnd) {
				loadingService.complete();
			}
		});

	}

	/**
	 * Start loading overlay
	 * Setup language setting watcher
	 * Update View Meta data
	 */
	async ngOnInit() {
		try {
			await this.app.loadConfig('conf/lethean.ini')
		} catch (e) {
			this.offline = true
		}

		// setup language watcher
		this.currentLanguage$ = this.store.pipe(select(selectLanguage)).subscribe((lang) => {
			this.currentLanguage = lang;
			this.translate.use(lang);
		});

		this.updateMeta();

	}


	public ngOnDestroy() {
		this.sub.forEach((s) => s.unsubscribe());
	}

	public ngAfterContentInit(): void {
		if(!this.offline) this.startChain();
	}

	/**
	 * Dispatch a language change request
	 *
	 * @param {string} lang
	 */
	changeLanguage(lang: string) {
		this.store.dispatch(changeLanguage({language: lang}));
	}

	/**
	 * Dispatch a Menu toggle request
	 */
	toggleMenu() {
		this.store.dispatch(toggleHideNavigation());
	}

	/**
	 * creates subscriptions for multi lingual page meta
	 */
	updateMeta() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				const rt = this.getChild(this.activatedRoute);
				rt.data.subscribe((data) => {
					this.translate.get(data.title).subscribe((res: string) => {
						this.titleService.setTitle(res);
					});

					this.heading = data.heading;
					if (data.description) {

						this.translate.get(data.description).subscribe(() => {
							this.metaService.updateTag({
								name: 'description',
								content: data.description
							});
						});

					} else {
						this.metaService.removeTag('name=\'description\'');
					}

					if (!data.robots) {
						this.metaService.updateTag({
							name: 'robots',
							content: 'nofollow,noindex'
						});
					} else {
						this.metaService.updateTag({
							name: 'robots',
							content: 'follow,index'
						});
					}
				});
			});
	}

	/**
	 * Start chain daemon and wallet service
	 * unblock UI
	 */
	startChain() {

		this.chain.startDaemon().then(() => {
			//this.blockUI.stop();
			//this.wallet.startWallet().then(r => r);
		});

		this.chain.getInfo()

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

}
