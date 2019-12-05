import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroNutricionistaComponent } from './cadastro-nutricionista.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroNutricionistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroNutricionistaRoutingModule { }
