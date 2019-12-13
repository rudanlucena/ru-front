import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAuxiliosTemporariosComponent } from './listar-auxilios-temporarios.component';

const routes: Routes = [
  {path:'lista-auxilios-temporarios', component: ListarAuxiliosTemporariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarAuxiliosTemporariosRoutingModule { }
