import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRegistroRoutingModule } from './tipo-registro-routing.module';
import { CadastroTipoRegistroModule } from './cadastro-tipo-registro/cadastro-tipo-registro.module';
import { ListaTipoRegistroModule } from './lista-tipo-registro/lista-tipo-registro.module';
import { CadastroTipoRegistroComponent } from './cadastro-tipo-registro/cadastro-tipo-registro.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipoRegistroRoutingModule,
    CadastroTipoRegistroModule,
    ListaTipoRegistroModule
  ],
  exports:[
    CadastroTipoRegistroComponent
  ]
})
export class TipoRegistroModule { }
