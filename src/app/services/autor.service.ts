import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})

export class AutorService {
  
  private url = environment.host + 'usuarios/';
  constructor(private http: HttpClient) { }

  public async login(login: Login): Promise<Login>{
    return await this.http.post<Login>(this.url + 'sign-up', login).toPromise();
  }
}
