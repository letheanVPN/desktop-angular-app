import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [{
  path: '',
  component: ModalOverlaysComponent,
  data: {layout: 'full'},
  children: [
    {
      path: 'dialog',
      component: DialogComponent,
      data: {layout: 'full'}
    },
    {
      path: 'window',
      component: WindowComponent,
      data: {layout: 'full'}
    },
    {
      path: 'popover',
      component: PopoversComponent,
      data: {layout: 'full'}
    },
    {
      path: 'tooltip',
      component: TooltipComponent,
      data: {layout: 'full'}
    },
    {
      path: 'toastr',
      component: ToastrComponent,
      data: {layout: 'full'}
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOverlaysRoutingModule {
}


