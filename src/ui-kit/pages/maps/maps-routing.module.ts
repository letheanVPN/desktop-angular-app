import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './maps.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapComponent } from './search-map/map/map.component';
import { SearchComponent } from './search-map/search/search.component';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  data: {layout: 'full'},
  children: [{
    path: 'gmaps',
    component: GmapsComponent,
    data: {layout: 'full'}
  }, {
    path: 'leaflet',
    component: LeafletComponent,
    data: {layout: 'full'}
  }, {
    path: 'bubble',
    component: BubbleMapComponent,
    data: {layout: 'full'}
  }, {
    path: 'searchmap',
    component: SearchMapComponent,
    data: {layout: 'full'}
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  GmapsComponent,
  LeafletComponent,
  BubbleMapComponent,
  SearchMapComponent,
  MapComponent,
  SearchComponent,
];
