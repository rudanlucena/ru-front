import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAuxiliosTemporariosAprovadosComponent } from './listar-auxilios-temporarios-aprovados.component';

const routes: Routes = [
  {path:'lista-auxilios-temporarios-aprovados', component: ListarAuxiliosTemporariosAprovadosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarAuxiliosTemporariosAprovadosRoutingModule { }
