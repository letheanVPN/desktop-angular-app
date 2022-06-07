import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import {CodeEditorModule} from '@swimlane/ngx-ui';



@NgModule({
	declarations: [
		EditorComponent
	],
	exports: [
		EditorComponent
	],
	imports: [
		CommonModule,
		CodeEditorModule
	]
})
export class EditorModule { }
