import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'biblioteca', children: [
    //{path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-biblioteca/cadastro-biblioteca.module#CadastroBibliotecaModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
