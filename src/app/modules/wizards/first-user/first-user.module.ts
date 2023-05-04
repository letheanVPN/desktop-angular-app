import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUserComponent } from './first-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule, NbStepperModule} from "@nebular/theme";



@NgModule({
    declarations: [
        FirstUserComponent
    ],
    exports: [
        FirstUserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        NbStepperModule,
        ReactiveFormsModule,
        NbSpinnerModule
    ]
})
export class FirstUserModule { }
