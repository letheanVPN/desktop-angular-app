import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashvaultComponent } from './hashvault.component';
import {ToolbarModule} from '@swimlane/ngx-ui';
import {MomentModule} from 'ngx-moment';
import {PipesModule} from '@pipe/pipes.module';
import {FlexModule} from '@angular/flex-layout';



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
		FlexModule
	]
})
export class HashvaultModule { }
