import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEditoraComponent } from './lista-editora.component';

const routes: Routes = [
  {path: '', component: ListaEditoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEditoraRoutingModule { }
