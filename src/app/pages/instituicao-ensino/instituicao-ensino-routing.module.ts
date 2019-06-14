import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'instituicaoEnsino', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'lista', loadChildren: './lista-instituicao-ensino/lista-instituicao-ensino.module#ListaInstituicaoEnsinoModule'},
    { path: 'cadastro', loadChildren: './cadastro-instituicao-ensino/cadastro-instituicao-ensino.module#CadastroInstituicaoEnsinoModule'},
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituicaoEnsinoRoutingModule { }
