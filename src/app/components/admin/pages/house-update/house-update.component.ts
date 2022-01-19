import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../../services/house/house.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../../services/category/category.service";

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})
export class HouseUpdateComponent implements OnInit {
  categories: any = []
  updateForm: FormGroup | any
  id: any

  constructor(private houseService: HouseService, private router: Router, private fb: FormBuilder, private categoyService: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id");
      this.getById(this.id)

    })

    this.getAllCategory()
  }
  getById(id: any) {
    this.houseService.getById(id).subscribe(res => {
      console.log(res)
      this.updateForm = this.fb.group({
        name: [res.name],
        address: [res.address],
        bedroom: [res.bedroom],
        bathroom: [res.bathroom],
        description: [res.description],
        price: [res.price],
        status: [res.status],
        category_id: [res.category_id],
        image: [res.image]
      })
    })
  }

  getAllCategory() {
    this.categoyService.getAll().subscribe(res => {
      this.categories = res
    })
  }
  update(id: any) {
    let data = this.updateForm?.value
    let user = JSON.parse(<string>localStorage.getItem("user"))
    data.user_id = user.id
    this.houseService.update(id, data).subscribe( () => {
      this.router.navigate(["admin/home"])
    })
  }

}
