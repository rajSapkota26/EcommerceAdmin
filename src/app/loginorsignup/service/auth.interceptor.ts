import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: LoginService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler):
    Observable<HttpEvent<any>> {
    //add token
    const token = this.service.getToken();
    let authReq = req;
    if (token != null) {
      authReq = authReq.clone({ setHeaders: { "Authorization": `Bearer ${token}` } })
    }
    return next.handle(authReq);
  }
}
export const authIntecepterProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];