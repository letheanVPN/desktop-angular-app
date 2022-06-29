import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmrigComponent } from './xmrig.component';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    XmrigComponent
  ],
	imports: [
		CommonModule,
		NgxUIModule,
		MatButtonModule,
		MatMenuModule
	]
})
export class XmrigModule { }
