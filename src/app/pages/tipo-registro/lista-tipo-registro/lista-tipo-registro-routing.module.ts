import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTipoRegistroComponent } from './lista-tipo-registro.component';

const routes: Routes = [
  {path: '', component: ListaTipoRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTipoRegistroRoutingModule { }
