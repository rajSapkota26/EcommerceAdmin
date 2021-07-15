import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  public saveWishList(WishList: any) {
    return this.http.post(`${baseUrl}/wishList/`, WishList);

  }
  public deleteWishList(id) {
    return this.http.delete(`${baseUrl}/wishList/${id}`);

  }
  public getAllWishList() {
    return this.http.get(`${baseUrl}/wishList/`);

  }
  public getAllWishListByUserId(id) {
    return this.http.get(`${baseUrl}/wishList/all/${id}`);

  }
}
