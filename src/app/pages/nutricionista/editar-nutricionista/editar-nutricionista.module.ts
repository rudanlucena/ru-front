import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarNutricionistaRoutingModule } from './editar-nutricionista-routing.module';
import { EditarNutricionistaComponent } from './editar-nutricionista.component';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarNutricionistaComponent],
  imports: [
    CommonModule,
    EditarNutricionistaRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
  ]
})
export class EditarNutricionistaModule { }
