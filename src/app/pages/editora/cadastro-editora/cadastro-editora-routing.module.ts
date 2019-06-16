import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEditoraComponent } from './cadastro-editora.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroEditoraComponent}
];
export const ROUTES = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroEditoraRoutingModule { }
