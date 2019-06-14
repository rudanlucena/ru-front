import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAutorComponent } from './cadastro-autor.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroAutorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAutorRoutingModule { }
