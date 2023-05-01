import { Component } from '@angular/core';

@Component({
  selector: 'lthn-ui-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      &nbsp; 
    </span>
    <div class="socials">
      <a href="https://github.com/letheanVPN" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/letheanVPN" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
