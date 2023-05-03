import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootRoutingModule} from '@module/root-routing.module';
import {LoginComponent} from '@module/user/auth/login.component';
import {BlockchainRoutingModule} from '@module/chain/blockchain-routing.module';
import {WalletRoutingModule} from '@module/chain/wallet/wallet-routing.module';
import {UserRoutingModule} from '@module/user/user-routing.module';
import {AuthGuard} from '@module/user/auth/route.guard';
import {DockerRoutingModule} from '@module/docker/docker-routing.module';
import {XmrigRoutingModule} from '@module/mining/xmrig/xmrig-routing.module';
import {LoadAppComponent} from '@module/apps/load-app/load-app.component';
import {AppsRoutingModule} from "@module/apps/apps-routing.module";
import {SystemRoutingModule} from "@module/system/system-routing.module";

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
		path: "ui-kit",
		data: {layout: 'full'},
		loadChildren: () => import('@ui/ui-kit.module').then(m => m.UiKitModule),
	},
	{
		path: "",
		redirectTo: 'chain',
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' }),
		AppsRoutingModule,
		BlockchainRoutingModule,
		UserRoutingModule,
		SystemRoutingModule,
		WalletRoutingModule,
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
