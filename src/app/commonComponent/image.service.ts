import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  public uploadImage(file: any) {

    return this.http.post(`${baseUrl}/uploading`, file);
  }
}
