import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html',
  styleUrls: ['./cadastro-autor.component.css']
})
export class CadastroAutorComponent implements OnInit {

  autor: Autor = new Autor();
  isFoto: boolean = false;
  data: string;
  sexo: any;

  constructor(private autorService: AutorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.select();
  }

  onFileChanged(event) {
    this.isFoto = true;
    let me = this;
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      me.autor.foto = reader.result.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  salvarAutor() {
    this.formatData();
    //
    this.autorService.salvar(this.autor).subscribe(
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
          html: `<h3>Não foi possível salvar o autor!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      });
  }

  formatData() {
    var dia = this.data[0] + this.data[1];
    var mes = this.data[2] + this.data[3];
    var ano = this.data[4] + this.data[5] + this.data[6] + +  this.data[7];
    var dataFormat = ano + "-" + mes + "-" + dia;
    //
    this.autor.dataNascimento = dataFormat;
  }

  select() {
    this.sexo = [
      { value: 'MASCULINO', viewValue: 'Masculino' },
      { value: 'FEMININO', viewValue: 'Feminino' },
    ];
  }
}
