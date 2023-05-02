import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';

const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
    data: {layout: 'full'}
  }, {
    path: 'icons',
    component: IconsComponent,
    data: {layout: 'full'}
  }, {
    path: 'typography',
    component: TypographyComponent,
    data: {layout: 'full'}
  }, {
    path: 'search-fields',
    component: SearchComponent,
    data: {layout: 'full'}
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
