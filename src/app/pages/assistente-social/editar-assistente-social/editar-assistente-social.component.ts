import { Component, OnInit } from '@angular/core';
import { AssistenteSocial } from 'src/app/models/AssistenteSocial';
import Swal from 'sweetalert2';
import { AssistenteSocialService } from 'src/app/services/assistente-social.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-editar-assistente-social',
  templateUrl: './editar-assistente-social.component.html',
  styleUrls: ['./editar-assistente-social.component.css']
})
export class EditarAssistenteSocialComponent implements OnInit {
  assistente: AssistenteSocial

  constructor(private assistenteSocialService: AssistenteSocialService,
    private alertService:AlertService, private router: Router) {
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
          this.alertService.success();
          this.router.navigate(['/assistente-social/lista']);
        })
    } catch (error) {
      this.alertService.error();
    }

  }
}
