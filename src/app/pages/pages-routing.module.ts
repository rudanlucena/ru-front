import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pages', children: [
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
    { path: 'cadastroAutor', loadChildren: './cadastro-autor/cadastro-autor.module#CadastroAutorModule' },
    { path: 'cadastroEditora', loadChildren: './cadastro-editora/cadastro-editora.module#CadastroEditoraModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
