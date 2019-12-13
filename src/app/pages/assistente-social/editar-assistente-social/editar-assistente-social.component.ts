import { Component, OnInit } from '@angular/core';
import { AssistenteSocial } from 'src/app/models/AssistenteSocial';
import Swal from 'sweetalert2';
import { AssistenteSocialService } from 'src/app/services/assistente-social.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-assistente-social',
  templateUrl: './editar-assistente-social.component.html',
  styleUrls: ['./editar-assistente-social.component.css']
})
export class EditarAssistenteSocialComponent implements OnInit {
  assistente: AssistenteSocial

  constructor(private assistenteSocialService: AssistenteSocialService, private router: Router) {
    this.assistente = new AssistenteSocial();
    this.assistente = JSON.parse(localStorage.getItem("assistenteEdit"))
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
      Swal.fire({
        html: `<h3>Não foi possível realizar a operação</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }

  }
}
