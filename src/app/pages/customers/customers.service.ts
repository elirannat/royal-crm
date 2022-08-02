import { Injectable } from '@angular/core';
import { Customer } from './customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [
    {
      _id: '1',
      firstName: 'Eliran',
      lastName: 'Natan',
      email: 'admin@pc-solutions.co.il',
      phone: '055-9999339',
      address: {
        state: 'Gosh-Dan',
        conutry: 'Israel',
        city: 'Petah-Tikva',
        street: 'Tereza Kugelman',
        houseNumber: 5,
        zip: 4972223,
      },
      createdAt: new Date(),
      notes: 'A very good customer!',
    },
    {
      _id: '2',
      firstName: 'Moshe',
      lastName: 'Cohen',
      email: 'moshe.cohen@pc-solutions.co.il',
      phone: '050-0000000',
      address: {
        state: 'Gosh-Dan',
        conutry: 'Israel',
        city: 'Tel-aviv',
        street: 'Rotshild',
        houseNumber: 8,
        zip: 1234567,
      },
      createdAt: new Date(),
      notes: 'A very bad customer!',
    },
  ];

  constructor() {}

  getAll(): Customer[] {
    return this.customers;
  }
}
