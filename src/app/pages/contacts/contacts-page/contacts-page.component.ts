import { Component } from '@angular/core';
import { Contact } from '../contact-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: [],
})
export class ContactsComponent {
  contacts: Array<Contact> = [];
  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getAll();
  }
}
