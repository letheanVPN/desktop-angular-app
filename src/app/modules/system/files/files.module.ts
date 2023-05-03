import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {NbCardModule, NbIconModule, NbListModule} from "@nebular/theme";
import {TreeModule} from "@circlon/angular-tree-component";



@NgModule({
  declarations: [
    FilesComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbListModule,
        NbIconModule,
        TreeModule
    ]
})
export class FilesModule { }
