import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAuxilioComponent } from './cadastro-auxilio.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroAuxilioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAuxilioRoutingModule { }
