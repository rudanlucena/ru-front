import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/models/periodo';
import Swal from 'sweetalert2';
import { PeriodoService } from 'src/app/services/periodo.service ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-auxilio',
  templateUrl: './cadastro-auxilio.component.html',
  styleUrls: ['./cadastro-auxilio.component.css']
})
export class CadastroAuxilioComponent implements OnInit {

  periodo:Periodo = new Periodo()
  

  constructor(private periodoService:PeriodoService, private router: Router) {
    this,this.lista();
   }

  ngOnInit() {
  }

  async salvarPeriodo() {
    //console.log(this.alunos)
    //this.formatData();
    //
    try {
      await this.periodoService.salvar(this.periodo).subscribe(
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

  lista(){
    this.periodoService.listar().subscribe(
      res => {
        this.periodo = res.body;
        
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

}
