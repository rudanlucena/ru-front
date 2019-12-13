import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaNutricionistaRoutingModule } from './lista-nutricionista-routing.module';
import { ListaNutricionistaComponent } from './lista-nutricionista.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListaNutricionistaComponent],
  imports: [
    CommonModule,
    ListaNutricionistaRoutingModule,
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
export class ListaNutricionistaModule { }
