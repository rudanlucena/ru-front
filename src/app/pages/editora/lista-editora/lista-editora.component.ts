import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Editora } from 'src/app/models/editora';
import Swal from 'sweetalert2';
import { EditoraService } from 'src/app/services/editora.service';

@Component({
  selector: 'app-lista-editora',
  templateUrl: './lista-editora.component.html',
  styleUrls: ['./lista-editora.component.css']
})
export class ListaEditoraComponent implements OnInit {

  editoras: MatTableDataSource<Editora>;
  displayedColumns: string[] = ['nome'];
  loader = 'none';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private editoraService: EditoraService) { }

  ngOnInit() {
    this.displayLoader();
    this.lista();
  }

  lista(){
    this.editoraService.listar().subscribe(
      res => {
        this.editoras = new MatTableDataSource<Editora>(res.body);
        this.displayLoader();
        this.editoras.paginator = this.paginator;
        console.log(this.editoras);
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
    this.editoras.filter = filterValue.trim().toLowerCase();
  }

   //verificando o loader
   displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

}
