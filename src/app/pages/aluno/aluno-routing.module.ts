import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'aluno', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-aluno/cadastro-aluno.module#CadastroAlunoModule'},
    { path: 'lista', loadChildren: './lista-aluno/lista-aluno.module#ListaAlunoModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
