import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login.interface';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  login: Login = { email: '', password: '' };

  onSubmit({ value, valid }: NgForm) {
    console.log(value);
    console.log(valid);
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }
}
