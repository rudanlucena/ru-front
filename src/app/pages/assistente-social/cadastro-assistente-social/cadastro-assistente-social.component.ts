import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Nutricionista } from 'src/app/models/Nutricionista';

import { Router } from '@angular/router';
import { AssistenteSocial } from 'src/app/models/AssistenteSocial'
import { AssistenteSocialService } from 'src/app/services/assistente-social.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-cadastro-assistente-social',
  templateUrl: './cadastro-assistente-social.component.html',
  styleUrls: ['./cadastro-assistente-social.component.css']
})
export class CadastroAssistenteSocialComponent implements OnInit {
  assistente: AssistenteSocial

  constructor(private assistenteSocialService: AssistenteSocialService,
     private router: Router, private alertService:AlertService) {
    this.assistente = new AssistenteSocial();
  }

  ngOnInit() {
  }

  async salvarAssistente() {
    console.log(this.assistente)
    try {
      await this.assistenteSocialService.salvar(this.assistente).subscribe(
        res => {
          this.alertService.success();
          this.router.navigate(['/assistente-social/lista']);
        }
      );

    } catch (error) {
      this.alertService.error();
    }

  }
}
