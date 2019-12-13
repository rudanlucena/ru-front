import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Nutricionista } from 'src/app/models/Nutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AssistenteSocial } from 'src/app/models/AssistenteSocial';
import { AssistenteSocialService } from 'src/app/services/assistente-social.service';

@Component({
  selector: 'app-lista-assistente-social',
  templateUrl: './lista-assistente-social.component.html',
  styleUrls: ['./lista-assistente-social.component.css']
})
export class ListaAssistenteSocialComponent implements OnInit {
  assistentes: MatTableDataSource<AssistenteSocial>;
  displayedColumns: string[] = ['nome', 'matricula', 'email', 'telefone', 'acoes'];
  loader = 'none';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private assistenteSocialService: AssistenteSocialService, private router: Router) { }

  ngOnInit() {
    
    this.lista();
  }

  lista(){
    this.displayLoader();
    this.assistenteSocialService.listar().subscribe(
      res => {
        this.assistentes = new MatTableDataSource<Nutricionista>(res.body);
        this.displayLoader();
        this.assistentes.paginator = this.paginator;
        console.log(this.assistentes);
      },
      error => {
        Swal.fire({
          html: `<h3>Não foi possível carregar a lista!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
        this.displayLoader();
      }
    );
  }

  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  applyFilter(filterValue: string) {
    this.assistentes.filter = filterValue.trim().toLowerCase();
  }

   async removerAssistente(id:number){
    try {
      await this.assistenteSocialService.remover(id);
      this.lista()
    } catch (error) {
      
    }
    console.log(id)
  }

  editarAssistente(assistente:AssistenteSocial){
    localStorage.setItem("assistenteEdit",JSON.stringify(assistente))
    this.router.navigate(["/assistente-social/editar/39"])
  }
}
