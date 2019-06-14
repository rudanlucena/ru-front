import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaInstituicaoEnsinoComponent } from './lista-instituicao-ensino.component';

const routes: Routes = [
  {path: '', component: ListaInstituicaoEnsinoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaInstituicaoEnsinoRoutingModule { }
