import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAuxilioRoutingModule } from './cadastro-auxilio-routing.module';
import { CadastroAuxilioComponent } from './cadastro-auxilio.component';
import { MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroAuxilioComponent],
  imports: [
    CommonModule,
    CadastroAuxilioRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
   
    
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CadastroAuxilioModule { }
