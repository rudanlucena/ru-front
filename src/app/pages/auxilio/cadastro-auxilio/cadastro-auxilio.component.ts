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
          Swal.fire(
            'Success!',
            'Salvo com sucesso.',
            'success'
          ).then((result) => {
            this.router.navigate(['/auxilio/cadastro']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire(
        'Error!',
        'Não foi posivel salvar o periodo.',
        'error'
      )
    }

  }

  lista(){
    this.periodoService.listar().subscribe(
      res => {
        this.periodo = res.body;
        
      },
      error => {
        console.log()
        Swal.fire(
          'Registre um periodo',
          'Nenhum Periodo Registrado Ainda',
          'info'
        )
      }
    );
  }

}
