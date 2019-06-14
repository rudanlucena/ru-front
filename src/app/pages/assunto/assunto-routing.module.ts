import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'assunto', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'lista', loadChildren: './lista-assunto/lista-assunto.module#ListaAssuntoModule'},
    { path: 'cadastro', loadChildren: './cadastro-assunto/cadastro-assunto.module#CadastroAssuntoModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuntoRoutingModule { }
