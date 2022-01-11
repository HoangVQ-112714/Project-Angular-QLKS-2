import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../../services/auth/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any

  constructor(private fb: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      repassword: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      avatar: ["", [Validators.required]],
      role: ["", [Validators.required]]
    })
  }
  register() {
    let data = this.registerForm?.value
    this.registerService.register(data).subscribe(res => {
      this.router.navigate(["login"])
    })
  }
  // get errorRegister() {
  //   return this.registerForm?.get("title")
  // }


}
