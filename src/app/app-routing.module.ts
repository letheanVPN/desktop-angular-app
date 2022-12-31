import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootRoutingModule} from '@module/root-routing.module';
import {LoginComponent} from '@module/auth/login.component';
import {BlockchainRoutingModule} from '@module/chain/blockchain-routing.module';
import {WalletRoutingModule} from '@module/wallet/wallet-routing.module';
import {UserRoutingModule} from '@module/user/user-routing.module';
import {AuthGuard} from '@module/auth/route.guard';
import {DocsRoutingModule} from "@module/docs/docs-routing.module";
import {DockerRoutingModule} from '@module/docker/docker-routing.module';
import {XmrigRoutingModule} from '@module/mining/xmrig/xmrig-routing.module';
import {LoadAppComponent} from '@module/load-app/load-app.component';
import {SettingsRoutingModule} from '@module/settings/settings-routing.module';

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
		path: "app/:id",
		component: LoadAppComponent
	},
	{
		path: "",
		redirectTo: 'chain',
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' }),
		BlockchainRoutingModule,
		UserRoutingModule,
		SettingsRoutingModule,
		WalletRoutingModule,
		DocsRoutingModule,
		DockerRoutingModule,
		XmrigRoutingModule,
		// Make sure Root is the last in the list, it has a catch all
		RootRoutingModule
	],
	providers: [AuthGuard],
	exports: [RouterModule]
})
/**
 * Application routing bootstrap file, adds all routes as lazy loaded modules
 */
export class AppRoutingModule {
}
