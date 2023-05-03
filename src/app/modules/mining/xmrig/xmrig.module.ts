import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmrigComponent } from './xmrig.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {XmrigStatusComponent} from '@module/mining/xmrig/status/status.component';
import {RouterModule} from '@angular/router';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {ConsoleModule} from '@module/system/console/console.module';
import {FlexModule} from '@angular/flex-layout';
import {MomentModule} from 'ngx-moment';
import {HashvaultModule} from '@module/mining/hashvault/hashvault.module';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
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
