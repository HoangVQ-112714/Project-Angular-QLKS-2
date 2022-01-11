import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {House} from "../../models/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(
      environment.api_url + "/houses"
    )
  }
  getById(id: number): Observable<any> {
    return this.http.get(
      environment.api_url + "/houses" + `/${id}`
    )
  }
}
