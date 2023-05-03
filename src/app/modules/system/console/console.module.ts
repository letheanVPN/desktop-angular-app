import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FlexModule} from '@angular/flex-layout';
import {NgTerminalModule} from "ng-terminal";


@NgModule({
	declarations: [ConsoleComponent],
	exports: [
		ConsoleComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		FlexModule,
		NgTerminalModule,
	]
})
export class ConsoleModule {}
