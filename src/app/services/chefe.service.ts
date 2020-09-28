import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Periodo } from '../models/periodo';

const httpOptions = new HttpHeaders(
  {
    //'Content-Type': 'application/json',
    //'Authorization': sessionStorage.getItem('token')
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*' 
  }
);

@Injectable({
  providedIn: 'root'
})

export class ChefeService {

  private url = environment.host+"periodos";

  constructor(private http: HttpClient) {
  }

  salvar(periodo: Periodo): Observable<HttpResponse<Periodo[]>> {
    return this.http.post<Periodo[]>(this.url, periodo, { observe: 'response' });
  }

  /*listar(): Observable<HttpResponse<Aluno[]>> {
    return this.http.get<Aluno[]>(this.url, { headers: httpOptions, observe: 'response' });
  }*/

}
