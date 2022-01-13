import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
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
