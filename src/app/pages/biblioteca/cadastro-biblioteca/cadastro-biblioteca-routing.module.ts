import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroBibliotecaComponent } from './cadastro-biblioteca.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroBibliotecaComponent}
];
export const ROUTES = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroBibliotecaRoutingModule { }
