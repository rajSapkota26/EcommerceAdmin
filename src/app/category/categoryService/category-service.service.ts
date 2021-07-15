import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './../../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }


  public getAllCategories() {
    return this.http.get(`${baseUrl}/category`);
  }
  public addCategories(categories) {
    return this.http.post(`${baseUrl}/category`, categories);
  }
  public updateCategories(categories) {
    return this.http.put(`${baseUrl}/category`, categories);
  }
  public deleteCategories(id) {
    return this.http.delete(`${baseUrl}/category/${id}`);
  }
  public getCategories(id) {
    return this.http.get(`${baseUrl}/category/${id}`);
  }
}
