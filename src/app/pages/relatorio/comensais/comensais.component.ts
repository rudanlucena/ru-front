import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Periodo } from 'src/app/models/periodo';
import { AlunoService } from 'src/app/services/aluno.service';
import { PeriodoService } from 'src/app/services/periodo.service ';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Auxilio } from 'src/app/models/auxilio';
import { Relatorio } from 'src/app/models/Relatorio';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-comensais',
  templateUrl: './comensais.component.html',
  styleUrls: ['./comensais.component.css']
})
export class ComensaisComponent implements OnInit {

  autores: MatTableDataSource<Relatorio>;
  displayedColumns: string[] = ['data1', 'almoco', 'jantar'];
  loader = 'none';
  periodo: Periodo = new Periodo();
  teste
  dataInicial:Date
  dataFinal:Date
  contAlmocos = 0;
  contJantar = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private alunoService: AlunoService,
     private periodoService: PeriodoService,
     private alertService:AlertService,
      private router: Router) { }

  ngOnInit() {
    //this.lista();
    //this.listaData();
    this.listaPeriodo();
  }


  listaData() {
    this.displayLoader();
    this.alunoService.listarRelatoriosx(this.dataInicial, this.dataFinal).subscribe(
      res => {
        let lista:Relatorio[] = res.body;
        this.contAlmocos = 0
        this.contJantar = 0
        lista.forEach(element => {
          this.contAlmocos += element.almoco;
          this.contJantar += element.jantar;
        });

        console.log("Total Almoços: "+this.contAlmocos)
        
        this.autores = new MatTableDataSource<Relatorio>(res.body);
        this.displayLoader();
        this.autores.paginator = this.paginator;
        console.log(this.autores);
      },
      error => {
        this.alertService.error();
        this.displayLoader();
      }
    );


  }

  listaPeriodo() {
    this.periodoService.listar().subscribe(
      res => {
        this.periodo = res.body;
      },
      error => {
        console.log("Cadastre um periodo")
        //this.alertService.error();
      }
    );
  }

  public async getAluno(id: number) {
    try {
      let r = await this.alunoService.getAll()
      console.log("*Aluno Encontrado:");

    } catch (e) {
      console.log("*Aluno Não Encontrado:");
    }
  }

  applyFilter(filterValue: string) {
    this.autores.filter = filterValue.trim().toLowerCase();
  }

  //verificando o loader
  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  async addAlmoco($event, aluno: Aluno) {
    console.log($event)
    console.log(aluno)
    try {
      let aux: Auxilio
      if (aluno.auxilio == null) {
        aux = new Auxilio();
        aux.almoco = $event.checked;
        aluno.auxilio = aux
      }

      else {
        aluno.auxilio.almoco = $event.checked;
        aux = aluno.auxilio;
      }

      await this.alunoService.addAuxilio(aux, aluno.matricula).subscribe(
        res => {
          
        }
      );
    } catch (error) {
      this.alertService.error();
    }
  }

  async addJantar($event, aluno: Aluno) {
    console.log($event)
    console.log(aluno)
    try {
      let aux: Auxilio
      if (aluno.auxilio == null) {
        aux = new Auxilio();
        aux.jantar = $event.checked;
      }

      else {
        aluno.auxilio.jantar = $event.checked;
        aux = aluno.auxilio;
      }

      await this.alunoService.addAuxilio(aux, aluno.matricula).subscribe(
        res => {
         
        }
      );

    } catch (error) {
      this.alertService.error();
    }
  }

  editar(aluno:Aluno){
    sessionStorage.setItem("alunoEdit", JSON.stringify(aluno))
    this.router.navigate(['/aluno/editar']);
  }

  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('comensais.pdf'); // Generated PDF
    });
  }

}
