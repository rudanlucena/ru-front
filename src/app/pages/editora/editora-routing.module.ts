import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'editora', children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    { path: 'lista', loadChildren: './lista-editora/lista-editora.module#ListaEditoraModule'},
    { path: 'cadastro', loadChildren: './cadastro-editora/cadastro-editora.module#CadastroEditoraModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoraRoutingModule { }
