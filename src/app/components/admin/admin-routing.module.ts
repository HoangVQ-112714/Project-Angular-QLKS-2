import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./layouts/admin-home/admin-home.component";
import {HouseCreateComponent} from "./pages/house-create/house-create.component";
import {AdminProfileComponent} from "./pages/admin-profile/admin-profile.component";
import {HouseUpdateComponent} from "./pages/house-update/house-update.component";

const routes: Routes = [
  {
    path: "home", component: AdminHomeComponent
  },
  {
    path: "house", children: [
      {
        path: "create", component: HouseCreateComponent
      },
      {
        path: "update/:id", component: HouseUpdateComponent
      }
    ]
  },
  {
    path: "managerProfile", component: AdminProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
