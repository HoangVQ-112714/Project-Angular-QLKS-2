import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../../services/auth/register.service";
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
      if (res.error) {
        this.errorLogin = res.message
      }else {
        this.router.navigate([""])
      }
    })
  }
  // get errorlogin() {
  //   this.loginForm?.get("title")
  // }
}
