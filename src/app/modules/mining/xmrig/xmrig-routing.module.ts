import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@module/auth/route.guard';
import {XmrigComponent} from '@module/mining/xmrig/xmrig.component';

const routes: Routes = [
	{
		path: 'mining/xmrig',
		component: XmrigComponent,
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
	providers: [AuthGuard],
	exports: [RouterModule]
})
export class XmrigRoutingModule {
}
