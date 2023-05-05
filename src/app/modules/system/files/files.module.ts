import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {NbCardModule, NbIconModule, NbListModule} from "@nebular/theme";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FilesComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbListModule,
        NbIconModule,
        CodemirrorModule,
        FormsModule
    ]
})
export class FilesModule { }
