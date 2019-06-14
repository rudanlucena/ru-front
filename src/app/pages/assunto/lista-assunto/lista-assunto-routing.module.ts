import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAssuntoComponent } from './lista-assunto.component';

const routes: Routes = [
  {path: '', component: ListaAssuntoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAssuntoRoutingModule { }
