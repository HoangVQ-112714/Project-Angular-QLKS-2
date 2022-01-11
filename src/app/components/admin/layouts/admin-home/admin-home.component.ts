import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllHouse()
  }
  getAllHouse() {
    this.userService.getAllHouse().subscribe( res => {
      console.log(res)
    })
  }

}
