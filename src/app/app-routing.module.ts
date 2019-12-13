import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'editar/:id', loadChildren: './pages/nutricionista/nutricionista.module#NutricionistaModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioModule' },
  { path: 'aluno', loadChildren: './pages/aluno/aluno.module#AlunoModule' },
  { path: 'auxilio', loadChildren: './pages/auxilio/auxilio.module#AuxilioModule' },
  { path: 'assistente-social', loadChildren: './pages/assistente-social/assistente-social.module#AssistenteSocialModule' },
  { path: 'nutricionista', loadChildren: './pages/nutricionista/nutricionista.module#NutricionistaModule' },
  //{ path: 'comensais', loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
