import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
        data: {layout: 'full'}
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
        data: {layout: 'full'}
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
        data: {layout: 'full'}
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {layout: 'full'}
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {layout: 'full'}
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

