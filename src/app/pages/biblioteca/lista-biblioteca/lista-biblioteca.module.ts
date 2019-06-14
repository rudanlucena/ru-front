import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaBibliotecaRoutingModule } from './lista-biblioteca-routing.module';
import { ListaBibliotecaComponent } from './lista-biblioteca.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListaBibliotecaComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaBibliotecaRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class ListaBibliotecaModule { }
