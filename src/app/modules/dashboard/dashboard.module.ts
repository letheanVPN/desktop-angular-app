import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbRadioModule, NbStepperModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {FirstUserModule} from "@module/wizards/first-user/first-user.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule,
        NbStepperModule,
        NbInputModule,
        FormsModule,
        NbRadioModule,
        FirstUserModule
    ]
})
export class DashboardModule { }
