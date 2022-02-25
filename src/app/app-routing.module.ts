import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootRoutingModule} from '@module/root-routing.module';
import {LoginComponent} from '@module/auth/login.component';
import {BlockchainRoutingModule} from '@module/chain/blockchain-routing.module';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		pathMatch: 'full',
		data: {
			title: 'Login - Lethean (LTHN)',
			heading: 'Login',
			description: 'Lethean (LTHN) Login',
			robots: true
		}
	},
	{
		path: "", redirectTo: 'dashboard',
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' }),
		BlockchainRoutingModule,
//		UserRoutingModule,
		//SettingsRoutingModule,
//		WalletRoutingModule,
		// Make sure Root is the last in the list, it has a catch all
		RootRoutingModule
	],
	exports: [RouterModule]
})
/**
 * Application routing bootstrap file, adds all routes as lazy loaded modules
 */
export class AppRoutingModule {
}
