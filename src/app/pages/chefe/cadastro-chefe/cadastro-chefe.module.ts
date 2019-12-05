import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroChefeRoutingModule } from './cadastro-chefe-routing.module';
import { CadastroChefeComponent } from './cadastro-chefe.component';

@NgModule({
  declarations: [CadastroChefeComponent],
  imports: [
    CommonModule,
    CadastroChefeRoutingModule
  ]
})
export class CadastroChefeModule { }
