import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxilioRoutingModule } from './auxilio-routing.module';
import { CadastroAuxilioModule } from './cadastro-auxilio/cadastro-auxilio.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ListarAuxiliosTemporariosModule } from './listar-auxilios-temporarios/listar-auxilios-temporarios.module';
import { ListarAuxiliosTemporariosAprovadosModule } from './listar-auxilios-temporarios-aprovados/listar-auxilios-temporarios-aprovados.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuxilioRoutingModule,
    CadastroAuxilioModule,
    ListarAuxiliosTemporariosModule,
    ListarAuxiliosTemporariosAprovadosModule
    
  ]
})
export class AuxilioModule { }
