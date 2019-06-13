import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAssuntoComponent } from './cadastro-assunto.component';

const routes: Routes = [
  { path:'cadastroAssunto', component: CadastroAssuntoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAssuntoRoutingModule { }
