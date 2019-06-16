import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { CadastroBibliotecaModule } from './cadastro-biblioteca/cadastro-biblioteca.module';
import { ListaBibliotecaModule } from './lista-biblioteca/lista-biblioteca.module';
import { CadastroBibliotecaComponent } from './cadastro-biblioteca/cadastro-biblioteca.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    CadastroBibliotecaModule,
    ListaBibliotecaModule
  ]
  ,
  exports:[
    CadastroBibliotecaComponent
  ]
})
export class BibliotecaModule { }
