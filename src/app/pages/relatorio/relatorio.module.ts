import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { AusentesComponent } from './ausentes/ausentes.component';
import { AusentesModule } from './ausentes/ausentes.module';
import { TopFaltasModule } from './top-faltas/top-faltas.module';
import { ComensaisModule } from './comensais/comensais.module';
import { BrMaskModel } from 'br-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    AusentesModule,
    TopFaltasModule,
    ComensaisModule,
  ]
})
export class RelatorioModule { }
