import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlockchainComponent} from '@module/chain/blockchain.component';
import {BlockDetailsComponent} from "@module/chain/components/block/details.component";
import {AuthGuard} from '@module/user/auth/route.guard';
import {BlockchainConfigComponent} from "@module/chain/components/config.component";
import {BlockchainStatsComponent} from "@module/chain/components/stats.component";
import {BlockLedgerComponent} from '@module/chain/components/block/ledger.component';

const routes: Routes = [
	{
		path: 'chain/stats',
		component: BlockchainStatsComponent,
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'chain/config',
		component: BlockchainConfigComponent,
		canActivate: [AuthGuard],
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'chain/block/:id',
		component: BlockDetailsComponent,
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'chain/ledger',
		component: BlockLedgerComponent,
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
