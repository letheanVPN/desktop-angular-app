import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusComponent} from './status.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {NoDaemonRunningDialog} from './dialog/no-daemon-running.component';
import { BootstateComponent } from './bootstate/bootstate.component';
import {ProgressSpinnerModule, SectionModule, StepperModule} from '@swimlane/ngx-ui';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '@module/auth/auth.module';

@NgModule({
	declarations: [StatusComponent, NoDaemonRunningDialog, BootstateComponent],
	exports: [StatusComponent, BootstateComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatTooltipModule,
		SectionModule,
		StepperModule,
		TranslateModule,
		AuthModule,
		ProgressSpinnerModule
	]
})
export class StatusModule {
}
