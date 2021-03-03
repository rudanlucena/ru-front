import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioComponent } from './horario.component';
import { MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  declarations: [HorarioComponent],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrMaskerModule
    
  ]
})
export class HorarioModule { }
