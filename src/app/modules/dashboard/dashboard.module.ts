import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {NbCardModule} from "@nebular/theme";



@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        NbCardModule
    ]
})
export class DashboardModule { }
