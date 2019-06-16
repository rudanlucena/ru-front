import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAssuntoRoutingModule } from './lista-assunto-routing.module';
import { ListaAssuntoComponent } from './lista-assunto.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListaAssuntoComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaAssuntoRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
  ,
  exports:[
    ListaAssuntoComponent
  ]
})
export class ListaAssuntoModule { }
