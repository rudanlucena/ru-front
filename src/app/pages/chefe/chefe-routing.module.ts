import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'chefe', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-chefe/cadastro-chefe.module#CadastroChefeModule'}
    //{ path: 'lista', loadChildren: './lista-chefe/lista-chefe.module#ListaChefeModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefeRoutingModule { }
