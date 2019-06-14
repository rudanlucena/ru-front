import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAutorComponent } from './lista-autor.component';

const routes: Routes = [
  {path:'', component: ListaAutorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAutorRoutingModule { }
