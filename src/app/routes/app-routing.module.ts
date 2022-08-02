import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { CustomersComponent } from '../pages/customers/customers-page/customers-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { LogoutPageComponent } from '../pages/logout-page/logout-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { NewCustomerComponent } from '../pages/customers/new-customer/new-customer.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new-contact', component: NewContactComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
