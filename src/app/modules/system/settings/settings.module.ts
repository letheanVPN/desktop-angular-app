import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {SettingsComponent} from './settings.component';
import {NbCardModule} from "@nebular/theme";

const routes: Routes = [
	{
		path: '',
		component: SettingsComponent,
		data: {
			title: 'Settings',
			heading: 'Unified Settings Panel',
			description: 'Lethean (LTHN) Blockchain Stats',
			robots: false
		}
	}
];

@NgModule({
	declarations: [SettingsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatCardModule,
		MatListModule,
		FlexModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatTabsModule,
		NbCardModule
	],
	exports: [RouterModule]
})
export class SettingsModule {
}
