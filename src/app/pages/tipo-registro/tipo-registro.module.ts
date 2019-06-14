import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRegistroRoutingModule } from './tipo-registro-routing.module';
import { CadastroTipoRegistroModule } from './cadastro-tipo-registro/cadastro-tipo-registro.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipoRegistroRoutingModule,
    CadastroTipoRegistroModule
  ]
})
export class TipoRegistroModule { }
