import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://www.brisanet.com.br" target="_blank">Brisanet </a></b> 2018</span>
  `,
})
export class FooterComponent {
}
