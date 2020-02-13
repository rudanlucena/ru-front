import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})

export class CadastroAlunoComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  conectandoSuap = false;

  alunos: Aluno[];
  isFoto: boolean = false;
  data: string;
  inicio: string;
  vencimento: string;
  sexo: any;
  curso: any;
  alunosFiltrados: Aluno[];

  tipoImpressao = "suap"

  constructor(private alunoService: AlunoService,
    private router: Router
  ) { 
    this.alunosFiltrados =[]
  }

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
      //me.aluno.foto = reader.result.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  async salvarAluno(alunos:Aluno[]) {
    //console.log(this.alunos)
    //this.formatData();
    //
    try {
      await this.alunoService.salvar(alunos).subscribe(
        res => {
          swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/aluno/lista']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      swal.fire({
        html: `<h3>Não foi possível salvar o Aluno!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }

  }

  formatData() {
    var dia = this.data[0] + this.data[1];
    var mes = this.data[2] + this.data[3];
    var ano = this.data[4] + this.data[5] + this.data[6] + +  this.data[7];
    var date = new Date(Date.UTC(parseInt(ano), parseInt(mes), parseInt(dia)));
    var dataFormat = date;
    //
    //this.aluno.nascimento = dataFormat;

    var dia = this.inicio[0] + this.inicio[1];
    var mes = this.inicio[2] + this.inicio[3];
    var ano = this.inicio[4] + this.inicio[5] + this.inicio[6] + +  this.inicio[7];
    var date = new Date(Date.UTC(parseInt(ano), parseInt(mes), parseInt(dia)));
    var inicioFormat = date
    //
    //this.aluno.inicio = inicioFormat;

    var dia = this.vencimento[0] + this.vencimento[1];
    var mes = this.vencimento[2] + this.vencimento[3];
    var ano = this.vencimento[4] + this.vencimento[5] + this.vencimento[6] + +  this.vencimento[7];
    var date = new Date(Date.UTC(parseInt(ano), parseInt(mes), parseInt(dia)));
    var vencimentoFormat = date
    //
    //this.aluno.vencimento = vencimentoFormat;
  }

  select() {
    this.sexo = [
      { value: 'MASCULINO', viewValue: 'Masculino' },
      { value: 'FEMININO', viewValue: 'Feminino' },
    ];

    this.curso = [
      { value: 'ADS', viewValue: 'ADS' },
      { value: 'AI', viewValue: 'AI' },
    ];
  }

  public async getAluno(id: number) {
    this.conectandoSuap = true;
    try {
      let r = await this.alunoService.getAll()
      console.log("*Aluno Encontrado:");
      console.log(r);
      this.alunos = r;

      
      this.alunos.forEach(element => {
        if(element.curso.nome.match(/CAMPUS CAJAZEIRAS/) && element.situacao == 'Matriculado'){
          this.alunosFiltrados.push(element);
        }
      });

      console.log("ALunos filtrados: "+this.alunosFiltrados.length)

      //alunosFiltrados = this.alunos
      //console.log(this.alunosFiltrados)

      await this.salvarAluno(this.alunosFiltrados);
      this.alunosFiltrados = []
    } catch (e) {
      console.log(e)
      swal.fire({
        html: `<h3>Não Foi Possível Realizar a operação</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
      console.log("*Aluno Não Encontrado:");
      this.conectandoSuap = false
    }
    
  }


  sincronizarComSUAP() {

    this.alunoService.sincronizarComSUAP().subscribe(

      res => {
        /**/
        console.log(res.body)

      },
      error => {

        this.conectandoSuap = false
      });
  }

}