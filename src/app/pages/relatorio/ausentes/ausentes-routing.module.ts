import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AusentesComponent } from './ausentes.component';

const routes: Routes = [
  {path:'ausentes', component: AusentesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AusentesRoutingModule { }
