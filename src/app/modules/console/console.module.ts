import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {NgTerminalModule} from 'ng-terminal';
import {FlexModule} from '@angular/flex-layout';
import { TerminalComponent } from 'src/app/modules/console/terminal.component';
import {SectionModule} from '@swimlane/ngx-ui';


@NgModule({
	declarations: [ConsoleComponent, TerminalComponent],
	exports: [
		ConsoleComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		NgTerminalModule,
		FlexModule,
		SectionModule
	]
})
export class ConsoleModule {}
