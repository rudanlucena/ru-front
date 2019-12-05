import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'nutricionista', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-nutricionista/cadastro-nutricionista.module#CadastroNutricionistaModule'}
    //{ path: 'lista', loadChildren: './lista-nutricionista/lista-nutricionista.module#ListaNutricionistaModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutricionistaRoutingModule { }
