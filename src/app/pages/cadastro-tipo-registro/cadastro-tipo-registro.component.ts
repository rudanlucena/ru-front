import { Component, OnInit } from '@angular/core';
import { TipoResistro } from 'src/app/models/tipoRegistro';
import { TipoRegistroService } from 'src/app/services/tipo-registro.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-tipo-registro',
  templateUrl: './cadastro-tipo-registro.component.html',
  styleUrls: ['./cadastro-tipo-registro.component.css']
})
export class CadastroTipoRegistroComponent implements OnInit {

  tipo: TipoResistro = new TipoResistro();

  constructor(
    private tipoService: TipoRegistroService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarTipo(){
    this.tipoService.salvar(this.tipo).subscribe(
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
          html: `<h3>Não foi possível salvar o tipo de registro bibliográfico!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      }
    )
  }
}
