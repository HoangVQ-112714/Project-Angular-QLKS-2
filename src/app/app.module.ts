import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { HouseDetailComponent } from './components/user/pages/house-detail/house-detail.component';
import { UserProfileComponent } from './components/user/pages/user-profile/user-profile.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {UserModule} from "./components/user/user.module";
import {AdminMasterComponent} from "./components/admin/layouts/admin-master/admin-master.component";
import {AdminModule} from "./components/admin/admin.module";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HouseDetailComponent,
    UserProfileComponent,
    AdminMasterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
