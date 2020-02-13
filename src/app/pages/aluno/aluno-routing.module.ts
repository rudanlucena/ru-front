import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'aluno', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-aluno/cadastro-aluno.module#CadastroAlunoModule'},
    { path: 'lista', loadChildren: './lista-aluno/lista-aluno.module#ListaAlunoModule'},
    { path: 'editar', loadChildren: './edita-aluno/edita-aluno.module#EditaAlunoModule'},
    { path: 'bolsistas', loadChildren: './lista-aluno-bolsista/lista-aluno-bolsista.module#ListaAlunoBolsistaModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
