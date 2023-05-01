import { Component } from '@angular/core';

@Component({
  selector: 'lthn-ui-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <lthn-ui-tiny-mce></lthn-ui-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEComponent {
}
