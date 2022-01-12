import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../services/auth/login.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userProfile()
  }
  userProfile() {
    this.userService.userProfile().subscribe(res => {
      this.user = res
    })
  }


}
