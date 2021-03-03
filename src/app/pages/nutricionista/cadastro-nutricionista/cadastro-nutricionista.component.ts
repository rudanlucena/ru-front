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
          Swal.fire(
            'Success',
            'Salvo com sucesso.',
            'success'
          ).then((result) => {
            this.router.navigate(['/nutricionista/lista']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire(
        'Error!',
        'Não foi realizar a operação.',
        'error'
      )
    }

  }

}
