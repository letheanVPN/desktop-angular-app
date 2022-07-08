import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmrigComponent } from './xmrig.component';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {XmrigStatusComponent} from '@module/mining/xmrig/status/status.component';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ConsoleModule} from '@module/console/console.module';
import {FlexModule} from '@angular/flex-layout';
import {MomentModule} from 'ngx-moment';
import {HashvaultModule} from '@module/mining/hashvault/hashvault.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {PipesModule} from '@pipe/pipes.module';
import {XmrigConfigComponent} from '@module/mining/xmrig/config/config.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
	declarations: [
		XmrigComponent,
		XmrigStatusComponent,
		XmrigConfigComponent
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
		MatProgressBarModule,
		ConsoleModule,
		FlexModule,
		MomentModule,
		HashvaultModule,
		MatTabsModule,
		MatListModule,
		PipesModule,
		TranslateModule
	]
})
export class XmrigModule { }
