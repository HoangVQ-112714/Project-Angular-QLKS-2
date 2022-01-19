import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {LoginService} from "../auth/login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private loginService: LoginService) { }
  getOrder(id: any, data: any): Observable<any> {
    return this.http.post(
      environment.api_url + "/orders" + `/${id}`, data,{headers: this.loginService.setHeader()}
    )
  }

  orderUser() {
    return this.http.get(
      environment.api_url + "/orders", {headers: this.loginService.setHeader()}
    )
  }
  deleteOrder(id: number) {
    return this.http.delete(
      environment.api_url + "/orders" + `/${id}`, {headers: this.loginService.setHeader()}
    )
  }

}
