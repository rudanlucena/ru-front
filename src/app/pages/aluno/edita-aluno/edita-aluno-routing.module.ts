import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditaAlunoComponent } from './edita-aluno.component';

const routes: Routes = [
  {path:'editar', component: EditaAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditaAlunoRoutingModule { }
