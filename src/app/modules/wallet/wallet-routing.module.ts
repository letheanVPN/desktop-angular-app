import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from '@module/wallet/wallet.component';
import {DetailsComponent} from '@module/wallet/details/details.component';
import {WalletNewComponent} from '@module/wallet/components/wallet-new.component';

const routes: Routes = [
	{
		path: 'wallet',
		component: WalletComponent,
		data: {
			title: 'view.wallets.title',
			heading: 'view.wallets.heading',
			description: 'view.wallets.description',
			robots: false
		}
	},
	{
		path: 'wallet/new/:id',
		component: WalletNewComponent,
		data: {
			title: 'view.wallets.new.title',
			heading: 'view.wallets.new.heading',
			description: 'view.wallets.new.description',
			robots: false
		}
	},
	{
		path: 'wallet/details/:id',
		component: DetailsComponent,
		data: {
			title: 'view.wallets.title',
			heading: 'view.wallets.heading',
			description: 'view.wallets.description',
			robots: false
		}
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WalletRoutingModule {
}
