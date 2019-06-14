import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntoRoutingModule } from './assunto-routing.module';
import { CadastroAssuntoModule } from './cadastro-assunto/cadastro-assunto.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AssuntoRoutingModule,
    CadastroAssuntoModule
  ]
})
export class AssuntoModule { }
