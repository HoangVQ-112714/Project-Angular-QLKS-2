import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../../services/auth/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name:  new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repassword: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    avatar: new FormControl(),
    role: new FormControl(),
  })


  constructor(private fb: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.min(6)]],
      repassword: ['', [Validators.required, Validators.min(6)]],
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
  get errorName() {
    return this.registerForm.get("name")
  }
  get errorEmail() {
    return this.registerForm.get("email")
  }
  get errorPassword() {
    return this.registerForm.get("password")
  }
  get errorRepassword() {
    return this.registerForm.get("repassword")
  }
  get errorAddress() {
    return this.registerForm.get("address")
  }
  get errorPhone() {
    return this.registerForm.get("phone")
  }
  get errorAvatar() {
    return this.registerForm.get("avatar")
  }
  get errorRole() {
    return this.registerForm.get("role")
  }


}
