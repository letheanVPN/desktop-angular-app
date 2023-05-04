import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstUserModule} from "@module/wizards/first-user/first-user.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      FirstUserModule
  ]
})
export class WizardsModule { }
