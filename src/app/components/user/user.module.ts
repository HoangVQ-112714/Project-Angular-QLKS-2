import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {MasterComponent} from "./layouts/master/master.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {HomeComponent} from "./pages/home/home.component";
import {HouseListComponent} from "./pages/house-list/house-list.component";
import { OrderComponent } from './pages/order/order.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";


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
        UserRoutingModule,
        NgxPaginationModule,
        FormsModule,
      Ng2SearchPipeModule
    ]
})
export class UserModule { }
