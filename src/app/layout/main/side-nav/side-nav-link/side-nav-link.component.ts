import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styles: [
    `
      .active {
        background: #000;
      }
    `,
  ],
})
export class SideNavLinkComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
}
