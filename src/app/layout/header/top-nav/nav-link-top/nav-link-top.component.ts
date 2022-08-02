import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-nav-link',
  templateUrl: './nav-link-top.component.html',
  styles: [],
})
export class NavLinkTopComponent {
  @Input() to: string = '';
  @Input() text: string = '';
}
