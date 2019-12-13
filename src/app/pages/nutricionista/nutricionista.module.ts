import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutricionistaRoutingModule } from './nutricionista-routing.module';
import { CadastroNutricionistaModule } from './cadastro-nutricionista/cadastro-nutricionista.module';
import { ListaNutricionistaComponent } from './lista-nutricionista/lista-nutricionista.component';
import { ListaNutricionistaModule } from './lista-nutricionista/lista-nutricionista.module';
import { EditarNutricionistaModule } from './editar-nutricionista/editar-nutricionista.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NutricionistaRoutingModule,
    CadastroNutricionistaModule,
    ListaNutricionistaModule,
    EditarNutricionistaModule
  ]
})
export class NutricionistaModule { }
