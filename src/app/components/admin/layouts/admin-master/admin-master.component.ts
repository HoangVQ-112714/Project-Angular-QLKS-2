import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../services/auth/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.css']
})
export class AdminMasterComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logout().subscribe(() => {
      localStorage.clear()
      this.router.navigate(["login"])
    })
  }

}
