import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [],
})
export class NewCustomerComponent {
  constructor(private CS: CustomerService, private router: Router) {}

  onSubmit(event: any) {
    if (event.firstName != undefined) {
      let customer: Customer = {
        firstName: event.firstName,
        lastName: event.lastName,
        email: event.email,
        phone: event.phone,
        address: {
          state: event.address.state,
          country: event.address.country,
          city: event.address.city,
          street: event.address.street,
          houseNumber: event.address.houseNumber,
          zip: event.address.zip,
        },
        notes: event.notes,
      };
      this.CS.add(customer, () => this.router.navigate(['/customers']));
    }
  }
}
