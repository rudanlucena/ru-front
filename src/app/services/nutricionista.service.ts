import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Periodo } from '../models/periodo';
import { Nutricionista } from '../models/Nutricionista';

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

export class NutricionistaService {

  private url = environment.host+"nutricionistas";

  constructor(private http: HttpClient) {
  }

  salvar(nutricionista: Nutricionista): Observable<HttpResponse<Nutricionista[]>> {
    return this.http.post<Nutricionista[]>(this.url, nutricionista, { observe: 'response' });
  }

  listar(): Observable<HttpResponse<Nutricionista[]>> {
    return this.http.get<Nutricionista[]>(this.url, { headers: httpOptions, observe: 'response' });
  }

  public async remover(id: number): Promise<Nutricionista> {
    const url = `${this.url}/${id}`;
    return await this.http.delete<Nutricionista>(url).toPromise();
  }

}
