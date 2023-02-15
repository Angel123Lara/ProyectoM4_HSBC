import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomePageServiceService {
  private url = 'http://localhost:8001/';
  constructor(private http: HttpClient) { }

  getHome(pathAdd : String) : Observable<String> {
    return this.http.get(this.url +pathAdd,{responseType : 'text'});
  }

  getDataAll(pathAdd : String) {
    return this.http.get(this.url + pathAdd)
  }
}
