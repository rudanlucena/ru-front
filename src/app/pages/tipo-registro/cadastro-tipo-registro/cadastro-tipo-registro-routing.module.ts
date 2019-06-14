import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroTipoRegistroComponent } from './cadastro-tipo-registro.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroTipoRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroTipoRegistroRoutingModule { }
