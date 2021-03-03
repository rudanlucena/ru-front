import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuxilioTemporario } from 'src/app/models/AuxilioTemporario';
import { AuxilioTemporarioService } from 'src/app/services/AuxilioTemporario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NutricionistaService } from 'src/app/services/nutricionista.service';
import { Nutricionista } from 'src/app/models/Nutricionista';
import { async } from 'q';

@Component({
  selector: 'app-lista-nutricionista',
  templateUrl: './lista-nutricionista.component.html',
  styleUrls: ['./lista-nutricionista.component.css']
})
export class ListaNutricionistaComponent implements OnInit {
  nutricionistas: MatTableDataSource<Nutricionista>;
  displayedColumns: string[] = ['nome', 'matricula', 'email', 'telefone', 'acoes'];
  loader = 'none';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private nutricionistaService: NutricionistaService, private router: Router) { }

  ngOnInit() {
    
    this.lista();
  }

  lista(){
    this.displayLoader();
    this.nutricionistaService.listar().subscribe(
      res => {
        this.nutricionistas = new MatTableDataSource<Nutricionista>(res.body);
        this.displayLoader();
        this.nutricionistas.paginator = this.paginator;
        console.log(this.nutricionistas);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        this.displayLoader();
      }
    );
  }

  alertRemoverAssistente(id:number){
    Swal.fire({
      title: 'Remover?',
      text: "Você realmente deseja remover esse usuraio?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'remover'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removerNutricionista(id).then(()=>{
          Swal.fire(
            'Deletado!',
            'Usuario removido com sucesso',
            'success'
          )
        })
      }
    })
  }

  displayLoader() {
    if (this.loader == 'block')
      this.loader = 'none';
    else
      this.loader = 'block';
  }

  applyFilter(filterValue: string) {
    this.nutricionistas.filter = filterValue.trim().toLowerCase();
  }

   async removerNutricionista(id:number){
    try {
      await this.nutricionistaService.remover(id);
      this.lista()
    } catch (error) {
      
    }
    console.log(id)
  }

  editarNutricionista(nutricionista:Nutricionista){
    localStorage.setItem("nutricionistaEdit",JSON.stringify(nutricionista))
    this.router.navigate(["/nutricionista/editar/39"])
  }
}
