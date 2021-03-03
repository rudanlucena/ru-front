import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/models/periodo';
import { PeriodoService } from 'src/app/services/periodo.service ';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Horario } from 'src/app/models/Horario';
import { HorarioService } from 'src/app/services/horario.service';
import { Jantar } from 'src/app/models/Jantar';
import { Almoco } from 'src/app/models/Almoco';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  horario:Horario
  

  constructor(private horarioService:HorarioService, private router: Router) {
    this.lista();
    this.horario = new Horario()
    this.horario.almoco = new Jantar()
    this.horario.jantar = new Almoco()
   }

  ngOnInit() {

  }

  async salvarHorario() {
    console.log(this.horario.almoco.abertura)
    //this.formatData();
    //
    try {
      await this.horarioService.salvar(this.horario).subscribe(
        res => {
          Swal.fire(
            'Success!',
            'Salvo com sucesso.',
            'success'
          ).then((result) => {
            
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
    this.horarioService.listar().subscribe(
      res => {
        this.horario = res.body;
        
      },
      error => {
        Swal.fire(
          'Error!',
          'Não foi posivel carregar a lista.',
          'error'
        )
      }
    );
  }

}
