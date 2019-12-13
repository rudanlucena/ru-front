import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAssistenteSocialComponent } from './lista-assistente-social.component';

const routes: Routes = [
  {path:'lista', component: ListaAssistenteSocialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAssistenteSocialRoutingModule { }
