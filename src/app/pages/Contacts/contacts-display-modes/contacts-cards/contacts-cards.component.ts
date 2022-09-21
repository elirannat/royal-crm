import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'contacts-cards',
  templateUrl: './contacts-cards.component.html',
  styles: [],
})
export class ContactsCardsComponent {
  @Input() contacts: Array<Contact> = [];
}
