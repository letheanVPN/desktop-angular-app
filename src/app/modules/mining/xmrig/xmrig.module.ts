import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmrigComponent } from './xmrig.component';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {XmrigStatusComponent} from '@module/mining/xmrig/status/status.component';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
	declarations: [
		XmrigComponent,
		XmrigStatusComponent
	],
	exports: [
		XmrigStatusComponent
	],
	imports: [
		CommonModule,
		NgxUIModule,
		MatButtonModule,
		MatMenuModule,
		RouterModule,
		MatProgressBarModule
	]
})
export class XmrigModule { }
