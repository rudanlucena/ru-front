import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Nutricionista } from 'src/app/models/Nutricionista';

import { Router } from '@angular/router';
import { AssistenteSocial } from 'src/app/models/AssistenteSocial'
import { AssistenteSocialService } from 'src/app/services/assistente-social.service';

@Component({
  selector: 'app-cadastro-assistente-social',
  templateUrl: './cadastro-assistente-social.component.html',
  styleUrls: ['./cadastro-assistente-social.component.css']
})
export class CadastroAssistenteSocialComponent implements OnInit {
  assistente:AssistenteSocial

  constructor(private assistenteSocialService:AssistenteSocialService, private router:Router) {
    this.assistente = new AssistenteSocial();
   }

  ngOnInit() {
  }

  async salvarAssistente() {
    console.log(this.assistente)
    try {
      await this.assistenteSocialService.salvar(this.assistente).subscribe(
        res => {
          Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/assistente-social/lista']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire({
        html: `<h3>Não foi possível fazer o cadastro!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }

  }
}
