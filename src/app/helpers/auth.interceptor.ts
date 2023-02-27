 import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login/login-service.service';
import { HttpContextToken, HttpContext } from '@angular/common/http';

const ADD_TOKEN = new HttpContextToken<boolean>(() => true);

export function addToken() {
  console.log("addToken")
  return new HttpContext().set(ADD_TOKEN, false);

}




@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private loginService : LoginServiceService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // my code

    
    
    const token = this.loginService.getToken();

    
    if (request.context.get(ADD_TOKEN)) {

      const cloneRequest = request.clone({
        headers: request.headers.set('Authorization','Bearer ' + token)
      })
      console.log("bearer was adding")
      return next.handle(cloneRequest)
    }
    console.log("not bearer")
    return next.handle(request);
  }
}
