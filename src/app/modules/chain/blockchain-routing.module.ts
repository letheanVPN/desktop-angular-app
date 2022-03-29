import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlockchainComponent} from '@module/chain/blockchain.component';
import {BlockDetailsComponent} from "@module/chain/components/block/details.component";
import {AuthGuard} from '@module/auth/route.guard';

const routes: Routes = [
	{
		path: 'chain/block/:id',
		component: BlockDetailsComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'chain',
		component: BlockchainComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
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
export class BlockchainRoutingModule {
}
