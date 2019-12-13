import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Periodo } from '../models/periodo';
import { Nutricionista } from '../models/Nutricionista';
import { AssistenteSocial } from '../models/AssistenteSocial';

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

export class AssistenteSocialService {

  private url = "http://localhost:9999/assistentes";

  constructor(private http: HttpClient) {
  }

  salvar(assistente: AssistenteSocial): Observable<HttpResponse<AssistenteSocial[]>> {
    return this.http.post<Nutricionista[]>(this.url, assistente, { observe: 'response' });
  }

  listar(): Observable<HttpResponse<AssistenteSocial[]>> {
    return this.http.get<AssistenteSocial[]>(this.url, { headers: httpOptions, observe: 'response' });
  }

  public async remover(id: number): Promise<AssistenteSocial> {
    const url = `${this.url}/${id}`;
    return await this.http.delete<Nutricionista>(url).toPromise();
  }

}
