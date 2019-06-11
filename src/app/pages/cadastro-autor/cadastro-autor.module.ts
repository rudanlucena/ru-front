import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAutorRoutingModule } from './cadastro-autor-routing.module';
import { CadastroAutorComponent } from './cadastro-autor.component';

@NgModule({
  declarations: [CadastroAutorComponent],
  imports: [
    CommonModule,
    CadastroAutorRoutingModule
  ]
})
export class CadastroAutorModule { }
