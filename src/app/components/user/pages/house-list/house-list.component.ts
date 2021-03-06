import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: any = []
  term: any;

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.houseService.getAll().subscribe(res => {
      this.houses = res
    })

  }
}


