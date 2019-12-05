import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { ListaAlunoModule } from './lista-aluno/lista-aluno.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    ListaAlunoModule,
    CadastroAlunoModule
  ]
})
export class AlunoModule { }
