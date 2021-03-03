import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AusentesRoutingModule } from './ausentes-routing.module';
import { AusentesComponent } from './ausentes.component';

@NgModule({
  declarations: [AusentesComponent],
  imports: [
    CommonModule,
    AusentesRoutingModule
  ]
})
export class AusentesModule { }
