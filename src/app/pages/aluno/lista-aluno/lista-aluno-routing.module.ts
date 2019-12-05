import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlunoComponent } from './lista-aluno.component';

const routes: Routes = [
  {path:'lista', component: ListaAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAlunoRoutingModule { }
