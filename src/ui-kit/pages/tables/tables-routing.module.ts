import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    // {
    //   path: 'smart-table',
    //   component: SmartTableComponent,
    //   data: {layout: 'full'}
    // },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
      data: {layout: 'full'}
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  TreeGridComponent,
];
