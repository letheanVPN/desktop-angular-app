import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    data: {layout: 'full'},
    children: [
      {
        path: '404',
        component: NotFoundComponent,
        data: {layout: 'default'}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule {
}
