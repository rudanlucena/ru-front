import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroInstituicaoEnsinoComponent } from './cadastro-instituicao-ensino.component';

const routes: Routes = [
  {path: 'cadastroInstituicao', component: CadastroInstituicaoEnsinoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroInstituicaoEnsinoRoutingModule { }
