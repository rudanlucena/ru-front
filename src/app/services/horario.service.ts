import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Horario } from '../models/Horario';

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

export class HorarioService {

  private url = environment.host+"horarios";

  constructor(private http: HttpClient) {
  }

  salvar(horario: Horario): Observable<HttpResponse<Horario[]>> {
    return this.http.post<Horario[]>(this.url, horario, { observe: 'response' });
  }

  listar(): Observable<HttpResponse<Horario>> {
    return this.http.get<Horario>(this.url, { headers: httpOptions, observe: 'response' });
  }

}
