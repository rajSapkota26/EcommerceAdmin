import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  public addUser(user) {
    return "";
    // this.http.post(`${baseUrl}/user/`, user)
  }
}
