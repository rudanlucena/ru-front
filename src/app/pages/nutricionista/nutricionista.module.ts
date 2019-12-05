import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutricionistaRoutingModule } from './nutricionista-routing.module';
import { CadastroNutricionistaModule } from './cadastro-nutricionista/cadastro-nutricionista.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NutricionistaRoutingModule,
    CadastroNutricionistaModule
  ]
})
export class NutricionistaModule { }
