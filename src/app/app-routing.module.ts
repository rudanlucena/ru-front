import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioModule' },
  { path: 'autor', loadChildren: './pages/autor/autor.module#AutorModule' },
  { path: 'assunto', loadChildren: './pages/assunto/assunto.module#AssuntoModule' },
  { path: 'biblioteca', loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule' },
  { path: 'editora', loadChildren: './pages/editora/editora.module#EditoraModule' },
  { path: 'instituicaoEnsino', loadChildren: './pages/instituicao-ensino/instituicao-ensino.module#InstituicaoEnsinoModule' },
  { path: 'tipoRegistro', loadChildren: './pages/tipo-registro/tipo-registro.module#TipoRegistroModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
