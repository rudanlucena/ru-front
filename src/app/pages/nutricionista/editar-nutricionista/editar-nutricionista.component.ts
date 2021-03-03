import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Nutricionista } from 'src/app/models/Nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-nutricionista',
  templateUrl: './editar-nutricionista.component.html',
  styleUrls: ['./editar-nutricionista.component.css']
})
export class EditarNutricionistaComponent implements OnInit {
  nutricionista: Nutricionista

  constructor(private nutricionistaService: NutricionistaService, private router: Router) {
    this.nutricionista = new Nutricionista();
    this.nutricionista = JSON.parse(localStorage.getItem("nutricionistaEdit"))
  }

  ngOnInit() {
    
  }

  async salvarNutricionista() {
    console.log(this.nutricionista)
    try {
      await this.nutricionistaService.salvar(this.nutricionista).subscribe(
        res => {
          Swal.fire(
            'Salvo',
            'Operação realizada com sucesso.',
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
        'Não foi possivel realizar a operação.',
        'error'
      )
    }

  }
}
