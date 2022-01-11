import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: any
  id: any

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id");
      this.getById(this.id)
    })

  }
  getById(id: any) {
    this.houseService.getById(id).subscribe(res => {
      console.log(res)
      this.house = res
    })
  }

}
