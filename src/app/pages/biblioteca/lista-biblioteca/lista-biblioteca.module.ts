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
import { CadastroBibliotecaComponent } from '../cadastro-biblioteca/cadastro-biblioteca.component';
import { ROUTES } from '../cadastro-biblioteca/cadastro-biblioteca-routing.module';

@NgModule({
  declarations: [ListaBibliotecaComponent],
  imports: [
    ROUTES,
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
  ,
  exports:[
    ListaBibliotecaComponent
  ]
})
export class ListaBibliotecaModule { }
