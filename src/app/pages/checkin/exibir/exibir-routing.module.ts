import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExibirComponent } from './exibir.component';

const routes: Routes = [
  {path: 'exibir', component: ExibirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExibirRoutingModule { }
