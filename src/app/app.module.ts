import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { ListaAlunoModule } from './pages/aluno/lista-aluno/lista-aluno.module';
import { CadastroAlunoModule } from './pages/aluno/cadastro-aluno/cadastro-aluno.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrMaskerModule } from 'br-mask';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenuModule,
    ListaAlunoModule,
    CadastroAlunoModule,
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
    BrMaskerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }  
  ],
  bootstrap: [AppComponent],
})
export class AppModule { } 
