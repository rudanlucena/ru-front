import { Component, OnInit } from '@angular/core';
import { InstituicaoEnsino } from 'src/app/models/instituicaoEnsino';
import { InstituicaoEnsinoService } from 'src/app/services/instituicao-ensino.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-instituicao-ensino',
  templateUrl: './cadastro-instituicao-ensino.component.html',
  styleUrls: ['./cadastro-instituicao-ensino.component.css']
})
export class CadastroInstituicaoEnsinoComponent implements OnInit {

  instituicao: InstituicaoEnsino = new InstituicaoEnsino();

  constructor(
    private instituicaoService: InstituicaoEnsinoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarInstituicao() {
    console.log(this.instituicao);
    this.instituicaoService.salvar(this.instituicao).subscribe(
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
          html: `<h3>Não foi possível salvar a instituição de ensino!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      });
  }
}
