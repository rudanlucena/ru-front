import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuxilioTemporario } from 'src/app/models/AuxilioTemporario';
import { AuxilioTemporarioService } from 'src/app/services/AuxilioTemporario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-auxilios-temporarios-aprovados',
  templateUrl: './listar-auxilios-temporarios-aprovados.component.html',
  styleUrls: ['./listar-auxilios-temporarios-aprovados.component.css']
})
export class ListarAuxiliosTemporariosAprovadosComponent implements OnInit {
  solicitacoes: MatTableDataSource<AuxilioTemporario>;
  displayedColumns: string[] = ['aluno', 'matricula', 'almoco', 'inicio', 'termino', 'motivo'];
  loader = 'none';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private auxilioTemporarioService: AuxilioTemporarioService, private router: Router) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.displayLoader();
    this.auxilioTemporarioService.listar("aprovado").subscribe(
      res => {
        this.solicitacoes = new MatTableDataSource<AuxilioTemporario>(res.body);
        this.displayLoader();
        this.solicitacoes.paginator = this.paginator;
        console.log(this.solicitacoes);
      },
      error => {
        Swal.fire(
          'Error!',
          'Não foi posivel carregar a lista.',
          'error'
        )
        this.displayLoader();
      }
      
    );
  }

  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  applyFilter(filterValue: string) {
    this.solicitacoes.filter = filterValue.trim().toLowerCase();
  }

  editarAlmoco($event, auxilio:AuxilioTemporario){
    try {
      auxilio.almoco = $event.checked;
      this.auxilioTemporarioService.editar(auxilio);
    } catch (error) {
      console.log("Não foi possivel solicitar o auxilio");
    }
  }

  editarJantar($event, auxilio:AuxilioTemporario){
    try {
      auxilio.jantar = $event.checked;
      this.auxilioTemporarioService.editar(auxilio);
    } catch (error) {
      console.log("Não foi possivel solicitar o auxilio");
    }
  }
}
