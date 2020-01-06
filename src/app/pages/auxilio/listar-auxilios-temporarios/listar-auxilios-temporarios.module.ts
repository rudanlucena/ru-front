import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarAuxiliosTemporariosRoutingModule } from './listar-auxilios-temporarios-routing.module';
import { ListarAuxiliosTemporariosComponent } from './listar-auxilios-temporarios.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListarAuxiliosTemporariosComponent],
  imports: [
    CommonModule,
    ListarAuxiliosTemporariosRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule

  ]
})
export class ListarAuxiliosTemporariosModule { }
