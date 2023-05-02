import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  data: {layout: 'full'},
  children: [{
    path: 'tinymce',
    component: TinyMCEComponent,
    data: {layout: 'full'}
  }, {
    path: 'ckeditor',
    component: CKEditorComponent,
    data: {layout: 'full'}
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
  TinyMCEComponent,
  CKEditorComponent,
];
