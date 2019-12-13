import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuxilioTemporario } from 'src/app/models/AuxilioTemporario';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { AuxilioTemporarioService } from 'src/app/services/AuxilioTemporario.service';

@Component({
  selector: 'app-listar-auxilios-temporarios',
  templateUrl: './listar-auxilios-temporarios.component.html',
  styleUrls: ['./listar-auxilios-temporarios.component.css']
})
export class ListarAuxiliosTemporariosComponent implements OnInit {

  solicitacoes: MatTableDataSource<AuxilioTemporario>;
  displayedColumns: string[] = ['aluno', 'matricula', 'almoco', 'inicio', 'termino', 'motivo', 'aprovar'];
  loader = 'none';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private auxilioTemporarioService: AuxilioTemporarioService, private router: Router) { }

  ngOnInit() {
    
    this.lista();
  }

  lista(){
    this.displayLoader();
    this.auxilioTemporarioService.listar("pendente").subscribe(
      res => {
        this.solicitacoes = new MatTableDataSource<AuxilioTemporario>(res.body);
        this.displayLoader();
        this.solicitacoes.paginator = this.paginator;
        console.log(this.solicitacoes);
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

  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  applyFilter(filterValue: string) {
    this.solicitacoes.filter = filterValue.trim().toLowerCase();
  }

  async aprovarAuxilio(auxilio:AuxilioTemporario) {
    console.log(auxilio);
    try {
      await this.auxilioTemporarioService.aprovarAuxilioTemporario(auxilio);
      this.lista();
      
    } catch (error) {
      console.log("Não foi possivel solicitar o auxilio");
    }
    /*.subscribe(
      response => {
        this.showSpinner = false
        this.aluno = response.body
        console.log(this.aluno);
      
        if(this.aluno==null){
          this.presentAlert()
          this.selectDisabled = true;
        }

        localStorage.setItem("aluno", JSON.stringify(this.aluno))
        this.ionViewWillEnter()
      },
      error => {
        this.showSpinner = false
        
      }
    )*/
  }

}
