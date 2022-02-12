import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootRoutingModule} from '@module/root-routing.module';
import {LoginComponent} from '@module/auth/login.component';
import {UserRoutingModule} from '@module/user/user-routing.module';
import {BlockchainRoutingModule} from '@module/chain/blockchain-routing.module';
import {WalletRoutingModule} from '@module/wallet/wallet-routing.module';

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
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' }),
		//PostRoutingModule,
		BlockchainRoutingModule,
		UserRoutingModule,
		//SettingsRoutingModule,
		WalletRoutingModule,
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
