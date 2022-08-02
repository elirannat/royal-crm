import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: '../../../app/components/binding/binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  public isHidden: boolean = false;

  public toggle(): void {
    this.isHidden = !this.isHidden;
  }

  public image = {
    url: `https://cdn.pixabay.com/photo/2022/04/19/11/26/crm-7142692_960_720.jpg`,
    alt: 'CRM Customer Relationship',
  };
}
