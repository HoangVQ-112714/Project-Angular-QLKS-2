import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {OrderService} from "../../../../services/order/order.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: any
  id: any
  dateForm: FormGroup | any


  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router, private orderService: OrderService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id");
      this.getById(this.id)
    })
    this.dateForm = this.fb.group({
      start_date: [""],
      end_date: [""]
    })

  }
  getById(id: any) {
    this.houseService.getById(id).subscribe(res => {
      this.house = res
    })
  }

  getOrder(id: any) {
    let data = this.dateForm?.value
    this.orderService.getOrder(id, data).subscribe(res => {
      this.router.navigate(["order"])
    })
  }

}
