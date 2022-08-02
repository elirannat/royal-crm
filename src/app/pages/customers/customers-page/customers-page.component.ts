import { Component } from '@angular/core';
import { Customer } from '../customer.interface';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: [],
})
export class CustomersComponent {
  customers: Array<Customer> = [];
  constructor(customersService: CustomersService) {
    this.customers = customersService.getAll();
  }
}
