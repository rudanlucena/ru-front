import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlunoBolsistaComponent } from './lista-aluno-bolsista.component';

const routes: Routes = [
  {path:'bolsistas', component: ListaAlunoBolsistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAlunoBolsistaRoutingModule { }
