import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntoRoutingModule } from './assunto-routing.module';
import { CadastroAssuntoModule } from './cadastro-assunto/cadastro-assunto.module';
import { ListaAssuntoModule } from './lista-assunto/lista-assunto.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AssuntoRoutingModule,
    CadastroAssuntoModule,
    ListaAssuntoModule
  ]
})
export class AssuntoModule { }
