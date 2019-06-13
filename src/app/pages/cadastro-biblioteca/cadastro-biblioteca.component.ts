import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/models/biblioteca';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-biblioteca',
  templateUrl: './cadastro-biblioteca.component.html',
  styleUrls: ['./cadastro-biblioteca.component.css']
})
export class CadastroBibliotecaComponent implements OnInit {

  biblioteca: Biblioteca = new Biblioteca();

  constructor(
    private bibliotecaService: BibliotecaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarBiblioteca(){
    this.bibliotecaService.salvar(this.biblioteca).subscribe(
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
          html: `<h3>Não foi possível salvar a biblioteca!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      }
    )
  }
}
