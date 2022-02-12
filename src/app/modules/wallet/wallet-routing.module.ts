import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'wallet',
		loadChildren: () =>
			import('src/app/modules/wallet/wallet.module').then((m) => m.WalletModule)
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WalletRoutingModule {
}
