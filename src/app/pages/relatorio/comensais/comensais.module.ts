import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComensaisRoutingModule } from './comensais-routing.module';
import { ComensaisComponent } from './comensais.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatDividerModule, MatListModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrMaskModel, BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [ComensaisComponent],
  imports: [
    CommonModule,
    ComensaisRoutingModule,
    MenuModule,
    CommonModule,
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
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    BrMaskerModule
  ]
})
export class ComensaisModule { }
