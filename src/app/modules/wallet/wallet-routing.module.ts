import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from '@module/wallet/wallet.component';
import {WalletNewComponent} from '@module/wallet/components/wallet-new.component';
import {RestoreComponent} from '@module/wallet/components/restore.component';
import {SettingsComponent} from '@module/wallet/components/settings.component';
import {AuthGuard} from '@module/auth/route.guard';

const routes: Routes = [
	{
		path: 'wallet',
		component: WalletComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.wallets.title',
			heading: 'view.wallets.heading',
			description: 'view.wallets.description',
			robots: false
		}
	},
	{
		path: 'wallet/new',
		component: WalletNewComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.wallets.new.title',
			heading: 'view.wallets.new.heading',
			description: 'view.wallets.new.description',
			robots: false
		}
	},
	{
		path: 'wallet/backup',
		component: RestoreComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.wallets.backup.title',
			heading: 'view.wallets.backup.heading',
			description: 'view.wallets.backup.description',
			robots: false
		}
	},
	{
		path: 'wallet/restore',
		component: RestoreComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.wallets.restore.title',
			heading: 'view.wallets.restore.heading',
			description: 'view.wallets.restore.description',
			robots: false
		}
	},
	{
		path: 'wallet/settings',
		component: SettingsComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.wallets.settings.title',
			heading: 'view.wallets.settings.heading',
			description: 'view.wallets.settings.description',
			robots: false
		}
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	providers: [AuthGuard],
	exports: [RouterModule]
})
export class WalletRoutingModule {
}
