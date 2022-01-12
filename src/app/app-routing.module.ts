import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/pages/login/login.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import {MasterComponent} from "./components/user/layouts/master/master.component";
import {AdminMasterComponent} from "./components/admin/layouts/admin-master/admin-master.component";


const routes: Routes = [
  {
    path: "", component: MasterComponent,
    loadChildren: () => import("./components/user/user.module").then(module => module.UserModule)
  },
  {
    path: "admin", component: AdminMasterComponent,
    loadChildren: () => import("./components/admin/admin.module").then(module => module.AdminModule)
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
