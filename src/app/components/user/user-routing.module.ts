import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HouseListComponent} from "./pages/house-list/house-list.component";
import {HouseDetailComponent} from "./pages/house-detail/house-detail.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "house", children: [
      {
        path: "", component: HouseListComponent
      },
      {
        path: ":id", component: HouseDetailComponent
      }
    ]
  },
  {
    path: "userProfile", component: UserProfileComponent
  },
  {
    path: "order", component: OrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
