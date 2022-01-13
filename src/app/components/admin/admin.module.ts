import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminHomeComponent} from "./layouts/admin-home/admin-home.component";
import {AdminProfileComponent} from "./pages/admin-profile/admin-profile.component";
import {HouseCreateComponent} from "./pages/house-create/house-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminProfileComponent,
    HouseCreateComponent,
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class AdminModule { }
