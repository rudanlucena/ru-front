import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';

const httpOptions = new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  }
);

@Injectable({
  providedIn: 'root'
})

export class AutorService {

  private url = environment.host + 'api/v1/autores';

  constructor(private http: HttpClient) {
  }

  salvar(autor: Autor): Observable<HttpResponse<Autor>> {
    return this.http.post<Autor>(this.url, autor, { headers: httpOptions, observe: 'response' });
  }

  listar(): Observable<HttpResponse<Autor[]>> {
    return this.http.get<Autor[]>(this.url, { headers: httpOptions, observe: 'response' });
  }
}
