import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { ListaAutorModule } from './lista-autor/lista-autor.module';
import { CadastroAutorModule } from './cadastro-autor/cadastro-autor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutorRoutingModule,
    ListaAutorModule,
    CadastroAutorModule
  ]
})
export class AutorModule { }
