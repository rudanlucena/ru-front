import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TipoResistro } from '../models/tipoRegistro';
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
export class TipoRegistroService {

  private url  = environment.host+'api/v1/tipos-registros-bibliograficos';

  constructor(private http: HttpClient) {
  }

  salvar(tipo : TipoResistro): Observable<HttpResponse<TipoResistro>> {
    return this.http.post<TipoResistro>(this.url, tipo , { headers: httpOptions, observe: 'response' });
  }
}
