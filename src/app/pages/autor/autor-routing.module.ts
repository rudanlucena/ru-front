import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'autor', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'cadastro', loadChildren: './cadastro-autor/cadastro-autor.module#CadastroAutorModule'},
    { path: 'lista', loadChildren: './lista-autor/lista-autor.module#ListaAutorModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
