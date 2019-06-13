import { Component, OnInit } from '@angular/core';
import { Assunto } from 'src/app/models/assunto';
import { AssuntoService } from 'src/app/services/assunto.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-assunto',
  templateUrl: './cadastro-assunto.component.html',
  styleUrls: ['./cadastro-assunto.component.css']
})
export class CadastroAssuntoComponent implements OnInit {

  assunto: Assunto = new Assunto();

  constructor(
    private assuntoService: AssuntoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarAssunto() {
    console.log(this.assunto);
    this.assuntoService.salvar(this.assunto).subscribe(
      res => {
        swal.fire({
          html: `<h3>Salvo com sucesso!</h3>`,
          type: 'success',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#39B54A'
        }).then((result) => {
          this.router.navigate(['/pages/inicio']);
        })
      },
      error => {
        swal.fire({
          html: `<h3>Não foi possível salvar o assunto!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      });
  }
}
