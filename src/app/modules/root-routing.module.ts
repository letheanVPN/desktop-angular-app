import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from '@module/root.component';
import {RootModule} from '@module/root.module';
import {DashboardComponent} from "@module/dashboard/dashboard.component";
import {DashboardModule} from "@module/dashboard/dashboard.module";

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		pathMatch: 'full',
		data: {
			title: 'view.dashboard.title',
			heading: 'view.dashboard.heading',
			description: 'view.dashboard.description',
			robots: true
		}
	}

];

@NgModule({
	declarations: [],
	imports: [CommonModule,
		RootModule,
		RouterModule.forChild(routes),
		DashboardModule],

	exports: [RouterModule]
})
export class RootRoutingModule {
}
