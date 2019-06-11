import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';


@Injectable({
  providedIn: 'root'
})

export class AutorService {
  
  private url = environment.host+'api/v1/autores';
  constructor(private http: HttpClient) { }

  salvar(autor : Autor) : Observable<HttpResponse<Autor>>{
    return this.http.post<Autor>(this.url, autor, {
      headers : {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      },
      observe : 'response'});
  }
}
