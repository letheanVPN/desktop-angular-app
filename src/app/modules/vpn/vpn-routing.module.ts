import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {VpnComponent} from 'src/app/modules/vpn/vpn.component';
import {AuthGuard} from '@module/auth/route.guard';

const routes: Routes = [
	{
		path: 'vpn',
		component: VpnComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	providers: [AuthGuard],
	exports: [RouterModule]
})
export class VpnRoutingModule {}
