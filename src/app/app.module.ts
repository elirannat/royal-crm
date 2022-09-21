import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/routes/app-routing.module';
import { AppComponent } from '../app/root/app.component';
import { CustomersPageComponent } from '../app/pages/Customers/customers-page/customers-page.component';
import { HeaderComponent } from '../app/layout/header/header.component';
import { FooterComponent } from '../app/layout/footer/footer.component';
import { MainComponent } from '../app/layout/main/main.component';
import { SideNavComponent } from '../app/layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from './layout/header/top-nav/right-top-nav/not-logged/not-logged.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TopNavLinkComponent } from './layout/header/top-nav/top-nav-link/top-nav-link.component';
import { RandomNumPipe } from './pipes/random-num.pipe';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { ContactsPageComponent } from '../app/pages/Contacts/contacts-page/contacts-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginPageComponent } from './pages/Users/login-page/login-page.component';
import { SignupPageComponent } from './pages/Users/signup-page/signup-page.component';
import { NewCustomerComponent } from '../app/pages/Customers/new-customer/new-customer.component';
import { NewContactComponent } from '../app/pages/Contacts/new-contact/new-contact.component';
import { CustomerFormComponent } from '../app/pages/Customers/customer-form/customer-form.component';

import { CustomerDetailsComponent } from '../app/pages/Customers/customer-details/customer-details.component';
import { ContactDetailsComponent } from '../app/pages/Contacts/contact-details/contact-details.component';
import { EditCustomerComponent } from '../app/pages/Customers/edit-customer/edit-customer.component';
import { EditContactComponent } from '../app/pages/Contacts/edit-contact/edit-contact.component';
import { ContactFormComponent } from '../app/pages/Contacts/contact-form/contact-form.component';
import { CalcAgePipe } from './pipes/calc-age.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CustomersFoldersComponent } from '../app/pages/Customers/customers-display-mode/customers-folders/customers-folders.component';
import { CustomersTableComponent } from '../app/pages/Customers/customers-display-mode/customers-table/customers-table.component';
import { ContactsFolderComponent } from '../app/pages/Contacts/contacts-display-modes/contacts-folder/contacts-folder.component';
import { ContactsTableComponent } from '../app/pages/Contacts/contacts-display-modes/contacts-table/contacts-table.component';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { CustomersCardsComponent } from './pages/Customers/customers-display-mode/customers-cards/customers-cards.component';
import { ContactsCardsComponent } from './pages/Contacts/contacts-display-modes/contacts-cards/contacts-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    LeftTopNavComponent,
    RightTopNavComponent,
    LoggedComponent,
    NotLoggedComponent,
    PageHeaderComponent,
    TopNavLinkComponent,
    RandomNumPipe,
    TextCapitalPipe,
    SideNavLinkComponent,
    ContactsPageComponent,
    ErrorPageComponent,
    AboutComponent,
    LoginPageComponent,
    SignupPageComponent,
    NewCustomerComponent,
    NewContactComponent,
    CustomerFormComponent,
    ContactFormComponent,
    CustomerDetailsComponent,
    ContactDetailsComponent,
    EditContactComponent,
    EditCustomerComponent,
    CalcAgePipe,
    SearchBarComponent,
    CustomersFoldersComponent,
    CustomersTableComponent,
    ContactsFolderComponent,
    ContactsTableComponent,
    DisplayModeControllersComponent,
    SpinnerLoaderComponent,
    CustomersCardsComponent,
    ContactsCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
