import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTipoRegistroRoutingModule } from './lista-tipo-registro-routing.module';
import { ListaTipoRegistroComponent } from './lista-tipo-registro.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListaTipoRegistroComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaTipoRegistroRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class ListaTipoRegistroModule { }
