import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  data: {layout: 'full'},
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
      data: {layout: 'full'}
    },
    {
      path: 'list',
      component: ListComponent,
      data: {layout: 'full'}
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
      data: {layout: 'full'}
    },
    {
      path: 'accordion',
      component: AccordionComponent,
      data: {layout: 'full'}
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
          data: {layout: 'full'}
        },
        {
          path: 'tab2',
          component: Tab2Component,
          data: {layout: 'full'}
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
