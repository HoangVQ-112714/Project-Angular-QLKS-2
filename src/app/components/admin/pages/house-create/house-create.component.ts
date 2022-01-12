import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../../services/category/category.service";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  houses: any = [];
  createForm: FormGroup | any
  categories: any = []

  constructor(private houseService: HouseService, private router: Router, private fb: FormBuilder, private categoyService: CategoryService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [""],
      address: [""],
      bedroom: [""],
      bathroom: [""],
      description: [""],
      price: [""],
      status: [""],
      category_id: [""],
      user_id: [""]
    })
    this.getAllCategory()
  }
  create() {
    let data = this.createForm?.value
    let user = JSON.parse(<string>localStorage.getItem("user"))
    data.user_id = user.id
    this.houseService.create(data).subscribe( res => {
      this.houses.push(res)
      this.router.navigate(["admin/home"])
    })
  }

  getAllCategory() {
    this.categoyService.getAll().subscribe(res => {
      this.categories = res
    })
  }


}
