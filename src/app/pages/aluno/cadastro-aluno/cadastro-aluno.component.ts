import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { AlertService } from 'src/app/services/alert.service';

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
    private router: Router,
    private alertService:AlertService
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
            this.alertService.success()
            this.router.navigate(['/aluno/lista']);
        }
      );

    } catch (error) {
      this.alertService.error()
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

  public async getAluno() {
    this.conectandoSuap = true;
    try {
      let r = await this.alunoService.getAll()
      console.log("*Aluno Encontrado:");
      console.log(r);
      this.alunos = r;

      
      this.alunos.forEach(element => {
        if(element.curso.nome.match(/CAMPUS CAJAZEIRAS/) && element.situacao == 'Matriculado'){
          element.senha = "1234"
          this.alunosFiltrados.push(element);
        }
      });

      await this.salvarAluno(this.alunosFiltrados);
      this.alunosFiltrados = []
    } catch (e) {
      this.alertService.error()
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