import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarAuxiliosTemporariosAprovadosRoutingModule } from './listar-auxilios-temporarios-aprovados-routing.module';
import { ListarAuxiliosTemporariosAprovadosComponent } from './listar-auxilios-temporarios-aprovados.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListarAuxiliosTemporariosAprovadosComponent],
  imports: [
    CommonModule,
    ListarAuxiliosTemporariosAprovadosRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ListarAuxiliosTemporariosAprovadosModule { }
