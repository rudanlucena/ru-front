import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarNutricionistaComponent } from './editar-nutricionista.component';

const routes: Routes = [
  {path: 'editar/:id', component: EditarNutricionistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarNutricionistaRoutingModule { }
