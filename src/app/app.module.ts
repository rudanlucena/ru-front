import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './pages/menu/menu.module';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { InicioModule } from './pages/inicio/inicio.module';
import { ListaAssuntoModule } from './pages/assunto/lista-assunto/lista-assunto.module';
import { CadastroAssuntoModule } from './pages/assunto/cadastro-assunto/cadastro-assunto.module';
import { ListaAutorModule } from './pages/autor/lista-autor/lista-autor.module';
import { CadastroAutorModule } from './pages/autor/cadastro-autor/cadastro-autor.module';
import { ListaBibliotecaModule } from './pages/biblioteca/lista-biblioteca/lista-biblioteca.module';
import { CadastroBibliotecaModule } from './pages/biblioteca/cadastro-biblioteca/cadastro-biblioteca.module';
import { ListaTipoRegistroModule } from './pages/tipo-registro/lista-tipo-registro/lista-tipo-registro.module';
import { CadastroTipoRegistroModule } from './pages/tipo-registro/cadastro-tipo-registro/cadastro-tipo-registro.module';
import { ListaInstituicaoEnsinoModule } from './pages/instituicao-ensino/lista-instituicao-ensino/lista-instituicao-ensino.module';
import { CadastroInstituicaoEnsinoModule } from './pages/instituicao-ensino/cadastro-instituicao-ensino/cadastro-instituicao-ensino.module';
import { AssuntoModule } from './pages/assunto/assunto.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    
    MenuModule,
    InicioModule,
    ListaAssuntoModule,
    CadastroAssuntoModule,
    

    ListaAutorModule,
    CadastroAutorModule,

    ListaBibliotecaModule,
    CadastroBibliotecaModule,

    ListaTipoRegistroModule,
    CadastroTipoRegistroModule,

    ListaInstituicaoEnsinoModule,
    CadastroInstituicaoEnsinoModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
