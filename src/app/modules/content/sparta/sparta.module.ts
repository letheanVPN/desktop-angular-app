import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpartaComponent } from './sparta.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    SpartaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SpartaModule { }
