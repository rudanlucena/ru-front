import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAssistenteSocialComponent } from './cadastro-assistente-social.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroAssistenteSocialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAssistenteSocialRoutingModule { }
