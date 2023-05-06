import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbTreeGridModule
} from "@nebular/theme";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule} from "@angular/forms";
import {ThemeModule} from "@ui/@theme/theme.module";
import { EditComponent } from './edit/edit.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    FilesComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbListModule,
        NbIconModule,
        CodemirrorModule,
        FormsModule,
        NbInputModule,
        NbTreeGridModule,
        ThemeModule,
        RouterLink,
        NbButtonModule
    ]
})
export class FilesModule { }
