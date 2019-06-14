import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Assunto } from 'src/app/models/assunto';
import { AssuntoService } from 'src/app/services/assunto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-assunto',
  templateUrl: './lista-assunto.component.html',
  styleUrls: ['./lista-assunto.component.css']
})
export class ListaAssuntoComponent implements OnInit {

  assuntos: MatTableDataSource<Assunto>;
  displayedColumns: string[] = ['nome'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private assuntoService: AssuntoService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.assuntoService.listar().subscribe(
      res => {
        this.assuntos = new MatTableDataSource<Assunto>(res.body);
        this.displayLoader();
        this.assuntos.paginator = this.paginator;
        console.log(this.assuntos);
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
    this.assuntos.filter = filterValue.trim().toLowerCase();
  }

   //verificando o loader
   displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }
}
