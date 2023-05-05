import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUserComponent } from './first-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule, NbStepperModule} from "@nebular/theme";
import {AvailableUserNameValidatorDirective} from "@module/wizards/first-user/usernameDirective";

@NgModule({
    declarations: [
        FirstUserComponent,
        AvailableUserNameValidatorDirective
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
