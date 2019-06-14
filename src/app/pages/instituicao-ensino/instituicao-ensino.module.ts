import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituicaoEnsinoRoutingModule } from './instituicao-ensino-routing.module';
import { CadastroInstituicaoEnsinoModule } from './cadastro-instituicao-ensino/cadastro-instituicao-ensino.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstituicaoEnsinoRoutingModule,
    CadastroInstituicaoEnsinoModule
  ]
})
export class InstituicaoEnsinoModule { }
