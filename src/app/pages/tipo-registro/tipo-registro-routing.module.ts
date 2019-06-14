import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'tipoRegistro', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'lista', loadChildren: './lista-tipo-registro/lista-tipo-registro.module#ListaTipoRegistroModule'},
    { path: 'cadastro', loadChildren: './cadastro-tipo-registro/cadastro-tipo-registro.module#CadastroTipoRegistroModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRegistroRoutingModule { }
