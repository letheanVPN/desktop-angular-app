import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'lthn-ui-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <lthn-ui-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </lthn-ui-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
