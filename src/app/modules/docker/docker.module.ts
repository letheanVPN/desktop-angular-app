import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerComponent } from './docker.component';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {MatButtonModule} from '@angular/material/button';



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
