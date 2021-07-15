import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http: HttpClient) { }

  public saveUserProfile(UserProfile: any) {
    return this.http.post(`${baseUrl}/userProfile/`, UserProfile);

  }
  public deleteUserProfile(id) {
    return this.http.delete(`${baseUrl}/userProfile/${id}`);

  }

  public updateUserProfile(UserProfile: any) {
    return this.http.put(`${baseUrl}/userProfile/`, UserProfile);

  }
  public getUserProfileByUserId(id) {
    return this.http.get(`${baseUrl}/userProfile/userid/${id}`);

  }
}
