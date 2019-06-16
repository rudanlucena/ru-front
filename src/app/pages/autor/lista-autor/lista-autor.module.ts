import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAutorRoutingModule } from './lista-autor-routing.module';
import { ListaAutorComponent } from './lista-autor.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CadastroAutorComponent } from '../cadastro-autor/cadastro-autor.component';


@NgModule({
  declarations: [ListaAutorComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaAutorRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports:[
    ListaAutorComponent
  ]
})
export class ListaAutorModule { }
