import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroChefeComponent } from './cadastro-chefe.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroChefeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroChefeRoutingModule { }
