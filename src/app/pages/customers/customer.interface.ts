import { Address } from 'src/app/interfaces/address';

export interface Customer {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: Address;
  createdAt: Date;
  notes: string;
}
