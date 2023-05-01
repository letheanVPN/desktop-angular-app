import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashvaultComponent } from './hashvault.component';
import {MomentModule} from 'ngx-moment';
import {PipesModule} from '@pipe/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';



@NgModule({
	declarations: [
		HashvaultComponent
	],
	exports: [
		HashvaultComponent
	],
	imports: [
		CommonModule,
		MomentModule,
		PipesModule,
		FlexModule,
		MatListModule
	]
})
export class HashvaultModule { }
