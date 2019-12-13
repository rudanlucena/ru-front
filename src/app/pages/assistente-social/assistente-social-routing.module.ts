import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'assistente-social', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'editar/:id', loadChildren: './editar-assistente-social/editar-assistente-social.module#EditarAssistenteSocialModule'},
    { path: 'cadastro', loadChildren: './cadastro-assistente-social/cadastro-assistente-social.module#CadastroAssistenteSocialModule'},
    { path: 'lista', loadChildren: './lista-assistente-social/lista-assistente-social.module#ListaAssistenteSocialModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenteSocialRoutingModule { }
