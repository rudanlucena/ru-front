import { Component, OnInit, ViewChild } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { Autor } from 'src/app/models/autor';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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
