import { Component, Input } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'customers-cards',
  templateUrl: './customers-cards.component.html',
  styles: [],
})
export class CustomersCardsComponent {
  @Input() customers: Array<Customer> = [];
}
