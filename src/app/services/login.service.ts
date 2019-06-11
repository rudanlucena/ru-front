import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private url = environment.host + 'login';
  constructor(private http: HttpClient) { }
  
  login(login : Login) : Observable<HttpResponse<Token>>{
    return this.http.post<Token>(this.url, login, { observe : 'response'});
  }
}
