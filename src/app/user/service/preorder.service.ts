import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper';

@Injectable({
  providedIn: 'root'
})
export class PreorderService {

  constructor(private http: HttpClient) { }
  public savePreOrders(PreOrders: any) {
    return this.http.post(`${baseUrl}/preOrder/`, PreOrders);

  }
  public deletePreOrders(id) {
    return this.http.delete(`${baseUrl}/preOrder/${id}`);

  }
  public getPreOrders(id) {
    return this.http.get(`${baseUrl}/preOrder/${id}`);

  }
  public getAllPreOrders() {
    return this.http.get(`${baseUrl}/preOrder/`);

  }

  public updatePreOrders(PreOrders: any) {
    return this.http.put(`${baseUrl}/preOrder/`, PreOrders);

  }
  public getPreOrdersByUserId(id) {
    return this.http.get(`${baseUrl}/preOrder/all/${id}`);

  }
}
