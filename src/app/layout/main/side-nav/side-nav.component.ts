import { Component } from '@angular/core';
import { SideNavLink } from 'src/app/layout/main/side-nav/side-nav-link.interface';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: SideNavLink[] = [
    {
      link: 'customers',
      text: 'customers',
      icon: 'fa-solid fa-users',
    },
    {
      link: 'contacts',
      text: 'contacts',
      icon: 'fa-solid fa-address-card',
    },
  ];
}
