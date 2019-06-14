import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { InstituicaoEnsino } from 'src/app/models/instituicaoEnsino';
import { InstituicaoEnsinoService } from 'src/app/services/instituicao-ensino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-instituicao-ensino',
  templateUrl: './lista-instituicao-ensino.component.html',
  styleUrls: ['./lista-instituicao-ensino.component.css']
})
export class ListaInstituicaoEnsinoComponent implements OnInit {

  instituicoes: MatTableDataSource<InstituicaoEnsino>;
  displayedColumns: string[] = ['nome'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private instituicaoService: InstituicaoEnsinoService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.instituicaoService.listar().subscribe(
      res => {
        this.instituicoes = new MatTableDataSource<InstituicaoEnsino>(res.body);
        this.displayLoader();
        this.instituicoes.paginator = this.paginator;
        console.log(this.instituicoes);
      },
      error => {
        Swal.fire({
          html: `<h3>Não foi possível carregar a lista!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      }
    );
  }

  applyFilter(filterValue: string) {
    this.instituicoes.filter = filterValue.trim().toLowerCase();
  }

   //verificando o loader
   displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }
}
