import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {LoginService} from "../auth/login.service";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient, private loginService: LoginService) { }
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
  create(data: any): Observable<any> {
    return this.http.post(
      environment.api_url + "/houses", data, {headers: this.loginService.setHeader()}
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(
      environment.api_url + "/houses" + `/${id}`
    )
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(
      environment.api_url + "/houses" + `/${id}`, data, {headers: this.loginService.setHeader()}
    )
  }
}
