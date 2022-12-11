import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerComponent } from './docker.component';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';



@NgModule({
  declarations: [
    DockerComponent
  ],
	imports: [
		CommonModule,
		NgxUIModule,
		MatButtonModule
	]
})
export class DockerModule { }
