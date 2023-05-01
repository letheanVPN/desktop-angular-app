import { Component } from '@angular/core';

@Component({
  selector: 'lthn-ui-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <lthn-ui-header></lthn-ui-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <lthn-ui-footer></lthn-ui-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent {}
