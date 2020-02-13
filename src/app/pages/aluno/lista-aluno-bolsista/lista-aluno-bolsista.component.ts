import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Aluno } from 'src/app/models/aluno';
import { Periodo } from 'src/app/models/periodo';
import { AlunoService } from 'src/app/services/aluno.service';
import { PeriodoService } from 'src/app/services/periodo.service ';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Auxilio } from 'src/app/models/auxilio';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-lista-aluno-bolsista',
  templateUrl: './lista-aluno-bolsista.component.html',
  styleUrls: ['./lista-aluno-bolsista.component.css']
})
export class ListaAlunoBolsistaComponent implements OnInit {

  autores: MatTableDataSource<Aluno>;
  displayedColumns: string[] = ['nome', 'matricula', 'almoco'];
  loader = 'none';
  periodo: Periodo = new Periodo();
  teste

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private alunoService: AlunoService, private periodoService: PeriodoService, private router: Router) { }

  ngOnInit() {

    this.lista();
    this.listaPeriodo();
  }

  lista() {
    this.displayLoader();
    this.alunoService.listarBolsistas().subscribe(
      res => {
        console.log("============================")
        console.log(res.body)
        this.autores = new MatTableDataSource<Aluno>(res.body);
        this.displayLoader();
        this.autores.paginator = this.paginator;
        console.log(this.autores);
      },
      error => {
        Swal.fire({
          html: `<h3>Não foi possível carregar a lista!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
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
        Swal.fire({
          html: `<h3>Não foi possível carregar o periodo</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
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

  /*async addAuxilio(aluno: Aluno) {

    alert("Matricula" + aluno.matricula)
    //console.log(this.alunos)
    //this.formatData();
    //
    try {

      let aux: Auxilio = new Auxilio;
      aux.almoco = true;
      aux.jantar = true;

      await this.alunoService.addAuxilio(aux, aluno.matricula).subscribe(
        res => {
          Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/aluno/lista']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire({
        html: `<h3>Não foi possível salvar o Aluno!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }

  }*/

  valueChange($event, aluno: Aluno) {

    //set the two-way binding here for the specific unit with the event
    console.log("===========================")
    console.log($event.checked);
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
          /*Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/aluno/lista']);
          })*/
        }

      );

    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire({
        html: `<h3>Não foi possível salvar o Aluno!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
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
          /*Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/aluno/lista']);
          })*/
        }

      );

    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire({
        html: `<h3>Não foi possível salvar o Aluno!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }
  }

}
