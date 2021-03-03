import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopFaltasRoutingModule } from './top-faltas-routing.module';
import { TopFaltasComponent } from './top-faltas.component';
import { MenuModule } from '../../menu/menu.module';
import { ListaAlunoRoutingModule } from '../../aluno/lista-aluno/lista-aluno-routing.module';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TopFaltasComponent],
  imports: [
    CommonModule,
    TopFaltasRoutingModule,

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
    MatSlideToggleModule
  ]
})
export class TopFaltasModule { }
