import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaNutricionistaComponent } from './lista-nutricionista.component';

const routes: Routes = [
  {path:'lista', component: ListaNutricionistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaNutricionistaRoutingModule { }
