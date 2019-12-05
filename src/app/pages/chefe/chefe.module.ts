import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefeRoutingModule } from './chefe-routing.module';
import { CadastroChefeModule } from './cadastro-chefe/cadastro-chefe.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChefeRoutingModule,
    CadastroChefeModule,
  ]
})
export class ChefeModule { }
