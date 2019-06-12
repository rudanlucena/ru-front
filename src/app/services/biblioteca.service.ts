import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Biblioteca } from '../models/biblioteca';

const httpOptions = new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  }
);

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private url = environment.host + 'api/v1/bibliotecas';

  constructor(private http: HttpClient) {
  }

  salvar(biblioteca: Biblioteca): Observable<HttpResponse<Biblioteca>> {
    return this.http.post<Biblioteca>(this.url, biblioteca, { headers: httpOptions, observe: 'response' });
  }
}
