import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'chain',
		loadChildren: () =>
			import('src/app/modules/chain/blockchain.module').then((m) => m.BlockchainModule)
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlockchainRoutingModule {
}
