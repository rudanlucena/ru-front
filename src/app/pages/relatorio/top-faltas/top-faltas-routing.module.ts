import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopFaltasComponent } from './top-faltas.component';

const routes: Routes = [
  {path:'top-faltas', component: TopFaltasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopFaltasRoutingModule { } 
