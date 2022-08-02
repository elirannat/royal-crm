import { Injectable } from '@angular/core';
import { Contact } from '../contacts/contact-interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      _id: '1',
      firstName: 'Eliran',
      lastName: 'Natan',
      email: 'admin@pc-solutions.co.il',
      birthday: new Date('7/21/1993'),
      phone: '055-9999339',
      age: 36,
      address: {
        state: 'Gosh-Dan',
        conutry: 'Israel',
        city: 'Petah-Tikva',
        street: 'Tereza Kugelman',
        houseNumber: 5,
        zip: 4972223,
      },
    },
    {
      _id: '2',
      firstName: 'Moshe',
      lastName: 'Cohen',
      email: 'moshe.cohen@pc-solutions.co.il',
      birthday: new Date('7/21/1995'),
      phone: '050-0000000',
      age: 21,
      address: {
        state: 'Gosh-Dan',
        conutry: 'Israel',
        city: 'Tel-aviv',
        street: 'Rotshild',
        houseNumber: 8,
        zip: 1234567,
      },
    },
  ];
  constructor() {}

  getAll(): Contact[] {
    return this.contacts;
  }
}
