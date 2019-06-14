import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaBibliotecaComponent } from './lista-biblioteca.component';

const routes: Routes = [
  {path: '', component: ListaBibliotecaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaBibliotecaRoutingModule { }
