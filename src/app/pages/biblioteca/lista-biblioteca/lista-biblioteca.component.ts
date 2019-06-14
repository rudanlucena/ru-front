import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Biblioteca } from 'src/app/models/biblioteca';
import Swal from 'sweetalert2';
import { BibliotecaService } from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-lista-biblioteca',
  templateUrl: './lista-biblioteca.component.html',
  styleUrls: ['./lista-biblioteca.component.css']
})
export class ListaBibliotecaComponent implements OnInit {

  bibliotecas: MatTableDataSource<Biblioteca>;
  displayedColumns: string[] = ['nome', 'setor'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.bibliotecaService.listar().subscribe(
      res => {
        this.bibliotecas = new MatTableDataSource<Biblioteca>(res.body);
        this.displayLoader();
        this.bibliotecas.paginator = this.paginator;
        console.log(this.bibliotecas);
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
    this.bibliotecas.filter = filterValue.trim().toLowerCase();
  }

   //verificando o loader
   displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

}
