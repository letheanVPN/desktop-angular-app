import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import {NbButtonModule, NbCardModule} from "@nebular/theme";
import {RouterLink} from "@angular/router";
import { ObjectsComponent } from './objects/objects.component';



@NgModule({
  declarations: [
    SystemComponent,
    ObjectsComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    RouterLink
  ]
})
export class SystemModule { }
