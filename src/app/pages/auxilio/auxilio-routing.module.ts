import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auxilio', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-auxilio/cadastro-auxilio.module#CadastroAuxilioModule'},
    { path: 'lista-auxilios-temporarios', loadChildren: './listar-auxilios-temporarios/listar-auxilios-temporarios.module#ListarAuxiliosTemporariosModule'},
    { path: 'lista-auxilios-temporarios', loadChildren: './listar-auxilios-temporarios-aprovados/listar-auxilios-temporarios-aprovados.module#ListarAuxiliosTemporariosAprovadosModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxilioRoutingModule { }
