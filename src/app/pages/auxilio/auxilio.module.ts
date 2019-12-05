import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxilioRoutingModule } from './auxilio-routing.module';
import { CadastroAuxilioModule } from './cadastro-auxilio/cadastro-auxilio.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuxilioRoutingModule,
    CadastroAuxilioModule,
    
  ]
})
export class AuxilioModule { }
