import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerComponent } from './docker.component';
import {NgxUIModule} from '@swimlane/ngx-ui';



@NgModule({
  declarations: [
    DockerComponent
  ],
	imports: [
		CommonModule,
		NgxUIModule
	]
})
export class DockerModule { }
