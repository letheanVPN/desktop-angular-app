import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HashvaultModule} from '@module/mining/hashvault/hashvault.module';
import {XmrigModule} from '@module/mining/xmrig/xmrig.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      HashvaultModule,
      XmrigModule
  ]
})
export class MiningModule { }
