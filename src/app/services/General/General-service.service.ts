import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { addToken } from 'src/app/helpers/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  private url = 'http://localhost:8001/';
  constructor(private http: HttpClient) { }

  getHome(pathAdd : String) : Observable<String> {
    return this.http.get(this.url +pathAdd,{responseType : 'text'});
  }

  getTitle(pathAdd : String) : Observable<String> {
    return this.http.get(this.url +pathAdd,{responseType : 'text', context: addToken()});
  }

  getDataAll(pathAdd : String) {
    return this.http.get(this.url + pathAdd,{context:addToken()})
  }
}