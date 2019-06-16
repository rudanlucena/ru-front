import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaInstituicaoEnsinoRoutingModule } from './lista-instituicao-ensino-routing.module';
import { ListaInstituicaoEnsinoComponent } from './lista-instituicao-ensino.component';
import { MenuModule } from '../../menu/menu.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CadastroInstituicaoEnsinoComponent } from '../cadastro-instituicao-ensino/cadastro-instituicao-ensino.component';

@NgModule({
  declarations: [ListaInstituicaoEnsinoComponent],
  imports: [
    MenuModule,
    CommonModule,
    ListaInstituicaoEnsinoRoutingModule,
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
    ListaInstituicaoEnsinoComponent
  ]
})
export class ListaInstituicaoEnsinoModule { }
