import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./layouts/admin-home/admin-home.component";
import {HouseCreateComponent} from "./pages/house-create/house-create.component";

const routes: Routes = [
  {
    path: "home", component: AdminHomeComponent
  },
  {
    path: "house", children: [
      {
        path: "create", component: HouseCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
