import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarAssistenteSocialComponent } from './editar-assistente-social.component';

const routes: Routes = [
  {path: 'editar/:id', component: EditarAssistenteSocialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarAssistenteSocialRoutingModule { }
