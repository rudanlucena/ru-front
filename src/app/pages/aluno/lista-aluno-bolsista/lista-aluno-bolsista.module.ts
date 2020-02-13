import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAlunoBolsistaRoutingModule } from './lista-aluno-bolsista-routing.module';
import { ListaAlunoBolsistaComponent } from './lista-aluno-bolsista.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebcamModule } from 'ngx-webcam';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ListaAlunoBolsistaComponent],
  imports: [
    CommonModule,
    ListaAlunoBolsistaRoutingModule,
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
    WebcamModule,
    MatButtonModule
  ],
  exports:[
    ListaAlunoBolsistaComponent
  ]
})
export class ListaAlunoBolsistaModule { }
