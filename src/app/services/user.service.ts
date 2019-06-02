import { environment } from './../../environments/environment';
import { HttpIUser } from './../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;
  constructor(private _http:HttpClient) { }
  GetUsers():Observable<HttpIUser>{
   return this._http.get<HttpIUser>(this.usersUrl)
  }
}

