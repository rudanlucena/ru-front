import { Component, OnInit, ViewChild } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { Autor } from 'src/app/models/autor';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autor.component.html',
  styleUrls: ['./lista-autor.component.css']
})
export class ListaAutorComponent implements OnInit {

  autores: MatTableDataSource<Autor>;
  displayedColumns: string[] = ['nome'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.autorService.listar().subscribe(
      res => {
        this.autores = new MatTableDataSource<Autor>(res.body);
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
}
