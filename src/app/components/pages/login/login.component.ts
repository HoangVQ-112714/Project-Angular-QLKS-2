import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/auth/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  errorLogin: any


  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    let data = this.loginForm?.value
    this.loginService.login(data).subscribe(res =>{
      let token = res.access_token;

      if (res.user.role == "Manager") {
        this.router.navigate(["admin/home"])
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.user))

      }
      if (res.error) {
        this.errorLogin = res.message
      }
      if (res.user.role == "User") {
        this.router.navigate(["home"])
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(res.user))
      }

    })
  }
  get errorEmail() {
    return this.loginForm.get("email")
  }
  get errorPassword() {
    return this.loginForm.get("password")
  }
  // get errorlogin() {
  //   this.loginForm?.get("title")
  // }
}
