import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../../../services/order/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  p: any
  orders: any = []

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderUser()
  }
  orderUser() {
    this.orderService.orderUser().subscribe(res => {
      this.orders = res
    })
  }

}
