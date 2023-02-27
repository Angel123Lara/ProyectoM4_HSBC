import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.models';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(creds: Credentials): Observable<HttpResponse<Object>>{

    return this.http.post('http://localhost:8001/login',creds,{
      //headers : new HttpHeaders({'Content-Type' : 'aplication/json'}),
      observe: 'response'
      
    })
    .pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const header = response.headers;   
      const bearerToken = header.get('Authorization')!;
      const token = bearerToken.replace('Bearer','');

      localStorage.setItem('token', token);

      return body;
    }))
    
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
