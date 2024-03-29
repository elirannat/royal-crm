import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../contact';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [],
})
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
  @Output() onDeleteContact = new EventEmitter();

  constructor(private CS: ContactsService) {}

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.CS.getAll((contacts: Contact[]) => {
      this.contacts = contacts;
      this.onDeleteContact.emit(contacts);
    });
  }
}
