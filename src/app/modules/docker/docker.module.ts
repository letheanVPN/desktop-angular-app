import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerComponent } from './docker.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';



@NgModule({
  declarations: [
    DockerComponent
  ],
	imports: [
		CommonModule,
		MatButtonModule
	]
})
export class DockerModule { }
