import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Assunto } from '../models/assunto';
import { Observable } from 'rxjs';

const httpOptions = new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  }
);

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  
  private url = environment.host + 'api/v1/assuntos';

  constructor(private http: HttpClient) {
  }

  salvar(assunto: Assunto): Observable<HttpResponse<Assunto>> {
    return this.http.post<Assunto>(this.url, assunto, { headers: httpOptions, observe: 'response' });
  }
}
