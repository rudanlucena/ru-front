import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroNutricionistaRoutingModule } from './cadastro-nutricionista-routing.module';
import { CadastroNutricionistaComponent } from './cadastro-nutricionista.component';
import { MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroNutricionistaComponent],
  imports: [
    CommonModule,
    CadastroNutricionistaRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CadastroNutricionistaModule { }
