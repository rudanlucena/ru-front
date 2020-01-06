import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAlunoRoutingModule } from './lista-aluno-routing.module';
import { ListaAlunoComponent } from './lista-aluno.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CadastroAlunoComponent } from '../cadastro-aluno/cadastro-aluno.component';


@NgModule({
  declarations: [ListaAlunoComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaAlunoRoutingModule,
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
  ],
  exports:[
    ListaAlunoComponent
  ]
})
export class ListaAlunoModule { }
