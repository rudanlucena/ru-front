import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { EditaAlunoModule } from './edita-aluno/edita-aluno.module';
import { ListaAlunoModule } from './lista-aluno/lista-aluno.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';
import { ListaAlunoBolsistaModule } from './lista-aluno-bolsista/lista-aluno-bolsista.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    ListaAlunoModule,
    CadastroAlunoModule,
    ListaAlunoBolsistaModule,
    EditaAlunoModule
  ]
})
export class AlunoModule { }
