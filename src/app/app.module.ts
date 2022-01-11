import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FooterComponent } from './components/user/layouts/footer/footer.component';
import { HeaderComponent } from './components/user/layouts/header/header.component';
import { MasterComponent } from './components/user/layouts/master/master.component';
import { HomeComponent } from './components/user/pages/home/home.component';
import { HouseListComponent } from './components/user/pages/house-list/house-list.component';
import { HouseDetailComponent } from './components/user/pages/house-detail/house-detail.component';
import { UserProfileComponent } from './components/user/pages/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin/pages/admin-profile/admin-profile.component';
import { HouseCreateComponent } from './components/admin/pages/house-create/house-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    MasterComponent,
    HomeComponent,
    HouseListComponent,
    HouseDetailComponent,
    UserProfileComponent,
    AdminProfileComponent,
    HouseCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
