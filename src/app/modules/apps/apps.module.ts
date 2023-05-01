import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import {NbButtonModule, NbCardModule} from "@nebular/theme";



@NgModule({
  declarations: [
    AppsComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule
    ]
})
export class AppsModule { }
