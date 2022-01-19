import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../services/category/category.service";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  houses: any = [];
  createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    bedroom: new FormControl(),
    bathroom: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
    category_id: new FormControl(),
    user_id: new FormControl(),
    image: new FormControl()
  })
  categories: any = []

  constructor(private houseService: HouseService, private router: Router, private fb: FormBuilder, private categoyService: CategoryService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      bedroom: ["", [Validators.required]],
      bathroom: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      status: ["", [Validators.required]],
      category_id: ["", [Validators.required]],
      user_id: ["", [Validators.required]],
      image: ["", [Validators.required]]
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
  get name() {
    return this.createForm.get("name")
  }
  get address() {
    return this.createForm.get("address")
  }
  get bedroom() {
    return this.createForm.get("bedroom")
  }
  get bathroom() {
    return this.createForm.get("bathroom")
  }
  get description() {
    return this.createForm.get("description")
  }
  get price() {
    return this.createForm.get("price")
  }
  get status() {
    return this.createForm.get("status")
  }
  get image() {
    return this.createForm.get("image")
  }


}
