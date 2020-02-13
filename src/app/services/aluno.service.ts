import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Auxilio } from '../models/auxilio';

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

export class AlunoService {

  private url = "http://localhost:9999/alunos";

  private urlAlunosSUAP = "/proxy";

  constructor(private http: HttpClient) {
  }

  salvar(aluno: Aluno[]): Observable<HttpResponse<Aluno[]>> {
    return this.http.post<Aluno[]>(this.url, aluno, { observe: 'response' });
  }

  atualizar(aluno:Aluno): Observable<HttpResponse<Aluno>> {
    return this.http.put<Aluno>(this.url, aluno, { observe: 'response' });
  }

  addAuxilio(auxilio: Auxilio, matricula:String): Observable<HttpResponse<Aluno>>{
    return this.http.post<Aluno>(this.url+'/'+matricula+'/auxilio', auxilio, { observe: 'response' });
  }

  listar(): Observable<HttpResponse<Aluno[]>> {
    return this.http.get<Aluno[]>(this.url, { headers: httpOptions, observe: 'response' });
  }

  listarBolsistas(): Observable<HttpResponse<Aluno[]>> {
    return this.http.get<Aluno[]>(this.url+"/bolsistas", { headers: httpOptions, observe: 'response' });
  }

  public async getAll():Promise<Aluno[]>{  
    return await this.http.get<Aluno[]>(this.urlAlunosSUAP).toPromise();
  }

  public async getMatricula(resultString: string):Promise<Aluno>{  
    return await this.http.get<Aluno>(this.url+"/"+resultString).toPromise();
  }

  sincronizarComSUAP(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.urlAlunosSUAP, {headers: httpOptions, observe: 'response' });
  }

  
}
