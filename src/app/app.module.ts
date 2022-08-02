import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/routes/app-routing.module';
import { AppComponent } from '../app/root/app.component';
import { BindingComponent } from '../app/components/binding/binding.component';
import { CustomersComponent } from './pages/customers/customers-page/customers-page.component';
import { HeaderComponent } from '../app/layout/header/header.component';
import { FooterComponent } from '../app/layout/footer/footer.component';
import { MainComponent } from '../app/layout/main/main.component';
import { SideNavComponent } from '../app/layout/main/side-nav/side-nav.component';
import { LogoTopComponent } from './layout/header/top-nav/logo-top/logo-top.component';
import { HamburgerTopComponent } from './layout/header/top-nav/hamburger-top/hamburger-top.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { OnlineComponent } from './layout/header/top-nav/right-top-nav/online/online.component';
import { OfflineComponent } from './layout/header/top-nav/right-top-nav/offline/offline.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavLinkTopComponent } from './layout/header/top-nav/nav-link-top/nav-link-top.component';
import { RandomNumPipe } from './pipes/random-num.pipe';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { HeightLightDirective } from './components/directive/height-light.directive';
import { DirectiveComponent } from './components/directive/directive.component';
import { ContactComponent } from './components/contact/contact.component';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { ContactsComponent } from './pages/contacts/contacts-page/contacts-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NewCustomerComponent } from './pages/customers/new-customer/new-customer.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CustomersComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoTopComponent,
    HamburgerTopComponent,
    LeftTopNavComponent,
    RightTopNavComponent,
    OnlineComponent,
    OfflineComponent,
    PageHeaderComponent,
    NavLinkTopComponent,
    RandomNumPipe,
    TextCapitalPipe,
    HeightLightDirective,
    DirectiveComponent,
    ContactComponent,
    SideNavLinkComponent,
    ContactsComponent,
    PageNotFoundComponent,
    AboutPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LogoutPageComponent,
    NewCustomerComponent,
    NewContactComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
