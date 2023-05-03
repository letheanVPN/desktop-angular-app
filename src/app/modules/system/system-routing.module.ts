import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SystemComponent} from "@module/system/system.component";
import {SystemModule} from "@module/system/system.module";
import {ConsoleModule} from "@module/system/console/console.module";
import {ConsoleComponent} from "@module/system/console/console.component";
import {FilesComponent} from "@module/system/files/files.component";
import {FilesModule} from "@module/system/files/files.module";

const routes: Routes = [
	{
		path: 'system',
		component: SystemComponent
	},
	{
		path: 'system/settings',
		loadChildren: () =>
			import('./settings/settings.module').then(
				(m) => m.SettingsModule
			)
	},
	{
		path: 'system/console',
		component: ConsoleComponent,
	},
	{
		path: 'system/files',
		component: FilesComponent,
	}

];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes), SystemModule, ConsoleModule, FilesModule],
	exports: [RouterModule]
})
export class SystemRoutingModule {
}
