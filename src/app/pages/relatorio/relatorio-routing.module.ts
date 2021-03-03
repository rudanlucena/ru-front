import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'relatorio', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'top-faltas', loadChildren: './top-faltas/top-faltas.module#TopFaltasModule'},
    { path: 'ausentes', loadChildren: './ausentes/ausentes.module#AusentesModule'},
    { path: 'comensais', loadChildren: './comensais/comensais.module#ComensaisModule'}
    //{ path: 'bolsistas', loadChildren: './lista-aluno-bolsista/lista-aluno-bolsista.module#ListaAlunoBolsistaModule'}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
