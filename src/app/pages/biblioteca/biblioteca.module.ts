import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { CadastroBibliotecaModule } from './cadastro-biblioteca/cadastro-biblioteca.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    CadastroBibliotecaModule
  ]
})
export class BibliotecaModule { }
