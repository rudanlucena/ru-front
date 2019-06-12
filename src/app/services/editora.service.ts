import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editora } from '../models/editora';

const httpOptions = new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  }
);

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  private url = environment.host + 'api/v1/editoras';

  constructor(private http: HttpClient) {
  }

  salvar(editora: Editora): Observable<HttpResponse<Editora>> {
    return this.http.post<Editora>(this.url, editora, { headers: httpOptions, observe: 'response' });
  }

  listar(): Observable<HttpResponse<Editora[]>> {
    return this.http.get<Editora[]>(this.url, { headers: httpOptions, observe: 'response' });
  }
}
