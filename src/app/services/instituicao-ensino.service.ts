import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InstituicaoEnsino } from '../models/instituicaoEnsino';
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
export class InstituicaoEnsinoService {

  private url = environment.host+'api/v1/instituicoes-ensino';

  constructor(private http: HttpClient) {
  }

  salvar(instituicaoEnsino : InstituicaoEnsino): Observable<HttpResponse<InstituicaoEnsino>> {
    return this.http.post<InstituicaoEnsino>(this.url, instituicaoEnsino , { headers: httpOptions, observe: 'response' });
  }
}
