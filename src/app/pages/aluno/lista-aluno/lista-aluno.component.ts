import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import Swal from 'sweetalert2';
import { Auxilio } from 'src/app/models/auxilio';
import { Router } from '@angular/router';
import { PeriodoService } from 'src/app/services/periodo.service ';
import { Periodo } from 'src/app/models/periodo';
import { async } from '@angular/core/testing';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  autores: MatTableDataSource<Aluno>;
  displayedColumns: string[] = ['nome', 'matricula', 'almoco', 'editar'];
  loader = 'none';
  periodo: Periodo = new Periodo();
  teste

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private alunoService: AlunoService,
     private periodoService: PeriodoService,
     private alertService:AlertService,
      private router: Router) { }

  ngOnInit() {
    this.lista();
    this.listaPeriodo();
  }

  lista() {
    this.displayLoader();
    this.alunoService.listar().subscribe(
      res => {
        this.autores = new MatTableDataSource<Aluno>(res.body);
        this.displayLoader();
        this.autores.paginator = this.paginator;
        console.log(this.autores);
      },
      error => {
        this.alertService.error();
        this.displayLoader();
      }
    );


  }

  listaPeriodo() {
    this.periodoService.listar().subscribe(
      res => {
        this.periodo = res.body;
      },
      error => {
        console.log("Cadastre um periodo")
        //this.alertService.error();
      }
    );
  }

  public async getAluno(id: number) {
    try {
      let r = await this.alunoService.getAll()
      console.log("*Aluno Encontrado:");

    } catch (e) {
      console.log("*Aluno Não Encontrado:");
    }
  }

  applyFilter(filterValue: string) {
    this.autores.filter = filterValue.trim().toLowerCase();
  }

  //verificando o loader
  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  async addAlmoco($event, aluno: Aluno) {
    console.log($event)
    console.log(aluno)
    try {
      let aux: Auxilio
      if (aluno.auxilio == null) {
        aux = new Auxilio();
        aux.almoco = $event.checked;
        aluno.auxilio = aux
      }

      else {
        aluno.auxilio.almoco = $event.checked;
        aux = aluno.auxilio;
      }

      await this.alunoService.addAuxilio(aux, aluno.matricula).subscribe(
        res => {
          
        }
      );
    } catch (error) {
      this.alertService.error();
    }
  }

  async addJantar($event, aluno: Aluno) {
    console.log($event)
    console.log(aluno)
    try {
      let aux: Auxilio
      if (aluno.auxilio == null) {
        aux = new Auxilio();
        aux.jantar = $event.checked;
      }

      else {
        aluno.auxilio.jantar = $event.checked;
        aux = aluno.auxilio;
      }

      await this.alunoService.addAuxilio(aux, aluno.matricula).subscribe(
        res => {
         
        }
      );

    } catch (error) {
      this.alertService.error();
    }
  }

  editar(aluno:Aluno){
    sessionStorage.setItem("alunoEdit", JSON.stringify(aluno))
    this.router.navigate(['/aluno/editar']);
  }
}
