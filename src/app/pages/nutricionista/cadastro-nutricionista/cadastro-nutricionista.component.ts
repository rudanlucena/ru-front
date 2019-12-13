import { Component, OnInit } from '@angular/core';
import { Nutricionista } from 'src/app/models/Nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-nutricionista',
  templateUrl: './cadastro-nutricionista.component.html',
  styleUrls: ['./cadastro-nutricionista.component.css']
})
export class CadastroNutricionistaComponent implements OnInit {
  nutricionista:Nutricionista

  constructor(private nutricionistaService:NutricionistaService, private router:Router) {
    this.nutricionista = new Nutricionista();
   }

  ngOnInit() {
  }

  async salvarNutricionista() {
    console.log(this.nutricionista)
    try {
      await this.nutricionistaService.salvar(this.nutricionista).subscribe(
        res => {
          Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/nutricionista/lista']);
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

}
