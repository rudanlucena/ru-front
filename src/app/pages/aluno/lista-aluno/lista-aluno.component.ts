import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { Auxilio } from 'src/app/models/auxilio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  autores: MatTableDataSource<Aluno>;
  displayedColumns: string[] = ['nome', 'matricula', 'almoco', 'jantar', 'salvar'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.alunoService.listar().subscribe(
      res => {
        this.autores = new MatTableDataSource<Aluno>(res.body);
        this.displayLoader();
        this.autores.paginator = this.paginator;
        console.log(this.autores);
      },
      error => {
        swal.fire({
          html: `<h3>Não foi possível carregar a lista!</h3>`,
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

  async addAuxilio(matricula:String) {

    alert("Matricula"+ matricula)
    //console.log(this.alunos)
    //this.formatData();
    //
    try {
      let aux:Auxilio = new Auxilio;
      aux.almoco = true;
      aux.jantar = true;

      await this.alunoService.addAuxilio(aux, matricula).subscribe(
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

  }
}
