import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {MasterComponent} from "./layouts/master/master.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {HomeComponent} from "./pages/home/home.component";
import {HouseListComponent} from "./pages/house-list/house-list.component";
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [
    MasterComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HouseListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
