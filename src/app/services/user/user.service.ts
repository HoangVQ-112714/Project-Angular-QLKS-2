import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {LoginService} from "../auth/login.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private loginService: LoginService) { }
  getAllHouse(): Observable<any> {
    return this.http.get(
      environment.api_url + "/users/house", {headers: this.loginService.setHeader()}
    )
  }

  userProfile(): Observable<any> {
    return this.http.get(
      environment.api_url + "/userProfile", {headers: this.loginService.setHeader()}
    )

  }
}
