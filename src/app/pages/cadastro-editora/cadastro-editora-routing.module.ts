import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEditoraComponent } from './cadastro-editora.component';

const routes: Routes = [
  {path: 'cadastroEditora', component: CadastroEditoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroEditoraRoutingModule { }
