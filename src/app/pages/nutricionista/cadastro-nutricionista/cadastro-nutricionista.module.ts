import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroNutricionistaRoutingModule } from './cadastro-nutricionista-routing.module';
import { CadastroNutricionistaComponent } from './cadastro-nutricionista.component';

@NgModule({
  declarations: [CadastroNutricionistaComponent],
  imports: [
    CommonModule,
    CadastroNutricionistaRoutingModule
  ]
})
export class CadastroNutricionistaModule { }
