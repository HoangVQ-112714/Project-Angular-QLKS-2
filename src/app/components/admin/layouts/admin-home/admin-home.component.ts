import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {HouseService} from "../../../../services/house/house.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  houses: any = []
  p: any

  constructor(private userService: UserService, private houseService: HouseService) { }

  ngOnInit(): void {
    this.getAllHouse()
  }
  getAllHouse() {
    this.userService.getAllHouse().subscribe( res => {
      this.houses = res
    })
  }
  delete(i: any) {
    let house = this.houses[i]
    this.houseService.delete(house.id).subscribe(() => {
      this.houses = this.houses.filter(
          (h: { id: any; }) => h.id !== house.id
      )
    })
  }

}
