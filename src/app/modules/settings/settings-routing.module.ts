import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Routes = [
	{
		path: 'settings',
		loadChildren: () =>
			import('./settings.module').then(
				(m) => m.SettingsModule
			)
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule {
}
