import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper';

@Injectable({
  providedIn: 'root'
})
export class MycartService {

  constructor(private http: HttpClient) { }

  public saveCart(MyCart: any) {
    return this.http.post(`${baseUrl}/myCart/`, MyCart);

  }
  public deleteCart(id) {
    return this.http.delete(`${baseUrl}/myCart/${id}`);

  }
  public getAllCart() {
    return this.http.get(`${baseUrl}/myCart/`);

  }
  public getAllCartById(id) {
    return this.http.get(`${baseUrl}/myCart/${id}`);

  }
  public getAllCartByUserId(id) {
    return this.http.get(`${baseUrl}/myCart/all/${id}`);

  }
}
