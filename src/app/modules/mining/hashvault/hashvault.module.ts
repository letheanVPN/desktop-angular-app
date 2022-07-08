import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashvaultComponent } from './hashvault.component';
import {ToolbarModule} from '@swimlane/ngx-ui';
import {MomentModule} from 'ngx-moment';
import {PipesModule} from '@pipe/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {NgChartsModule} from 'ng2-charts';
import {MatListModule} from '@angular/material/list';



@NgModule({
	declarations: [
		HashvaultComponent
	],
	exports: [
		HashvaultComponent
	],
	imports: [
		CommonModule,
		ToolbarModule,
		MomentModule,
		PipesModule,
		FlexModule,
		NgChartsModule,
		MatListModule
	]
})
export class HashvaultModule { }
