import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Auxilio } from '../models/auxilio';
import { AuxilioTemporario } from '../models/AuxilioTemporario';
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

export class AuxilioTemporarioService {

  private url = "http://localhost:9999/auxiliosTemporarios";


  private urlAlunosSUAP = "/api";

  constructor(private http: HttpClient) {
  }

  /*salvar(aluno: Aluno[]): Observable<HttpResponse<Aluno[]>> {
    return this.http.post<Aluno[]>(this.url, aluno, { observe: 'response' });
  }

  addAuxilio(auxilio: Auxilio, matricula:String): Observable<HttpResponse<Aluno>>{
    return this.http.post<Aluno>(this.url+'/'+matricula+'/auxilio', auxilio, { observe: 'response' });
  }*/

  listar(status: string): Observable<HttpResponse<AuxilioTemporario[]>> {
    return this.http.get<AuxilioTemporario[]>(this.url + "/status/" + status, { headers: httpOptions, observe: 'response' });
  }

  public async aprovarAuxilioTemporario(auxilio: AuxilioTemporario): Promise<AuxilioTemporario> {
    auxilio.status = "aprovado"
    const url = `${this.url}`;
    return await this.http.post<AuxilioTemporario>(url, auxilio).toPromise();
  }

  /*public async getAll():Promise<Aluno[]>{  
    return await this.http.get<Aluno[]>(this.urlAlunosSUAP).toPromise();
  }

  sincronizarComSUAP(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.urlAlunosSUAP, {headers: httpOptions, observe: 'response' });
  }*/

  


}
