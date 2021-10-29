import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models";
import {environment} from "../../environments/environment";
import {RegresEndpointsEnums} from "../enums";
import {map} from "rxjs/operators";
import {UserResponse, UsersResponse} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.requestHttp;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>(`${this.url}${RegresEndpointsEnums.USERS}?delay=3`)
      .pipe(
        map(response => response.data)
      );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<UserResponse>(`${this.url}${RegresEndpointsEnums.USERS}${userId}`)
      .pipe(
        map(response => response.data)
      );
  }
}
