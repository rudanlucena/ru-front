import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroAlunoComponent}
];
export const ROUTES = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAlunoRoutingModule { }
