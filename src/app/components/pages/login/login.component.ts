import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/auth/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any
  errorLogin: any


  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    })
  }

  login() {
    let data = this.loginForm?.value
    this.loginService.login(data).subscribe(res => {
      let token = res.access_token;

      if (res.user.role == "Manager") {
        this.router.navigate(["admin/home"])
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.user))
      }
      if (res.user.role == "User") {
        this.router.navigate(["home"])
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.user))
      }
      if (res.error) {
        this.errorLogin = res.message
      }
    })
  }
  // get errorlogin() {
  //   this.loginForm?.get("title")
  // }
}
