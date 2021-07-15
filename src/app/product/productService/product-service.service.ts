import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }


  public getAllProduct() {
    return this.http.get(`${baseUrl}/product`);
  }

  public getProductByCategory(id) {
    return this.http.get(`${baseUrl}/product/all/${id}`);
  }
  public getProduct(id) {
    return this.http.get(`${baseUrl}/product/${id}`);
  }
  public updateProduct(product) {
    return this.http.put(`${baseUrl}/product`, product);
  }
  public deleteProduct(id) {
    return this.http.delete(`${baseUrl}/product/${id}`);
  }
  public addProduct(product) {
    return this.http.post(`${baseUrl}/product`, product);
  }
}
