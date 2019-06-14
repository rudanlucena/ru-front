import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TipoResistro } from 'src/app/models/tipoRegistro';
import { TipoRegistroService } from 'src/app/services/tipo-registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tipo-registro',
  templateUrl: './lista-tipo-registro.component.html',
  styleUrls: ['./lista-tipo-registro.component.css']
})
export class ListaTipoRegistroComponent implements OnInit {

  tipos: MatTableDataSource<TipoResistro>;
  displayedColumns: string[] = ['nome'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private tipoService: TipoRegistroService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.tipoService.listar().subscribe(
      res => {
        this.tipos = new MatTableDataSource<TipoResistro>(res.body);
        this.displayLoader();
        this.tipos.paginator = this.paginator;
        console.log(this.tipos);
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
    this.tipos.filter = filterValue.trim().toLowerCase();
  }

   //verificando o loader
   displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

}
