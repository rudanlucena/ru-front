import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAssistenteSocialRoutingModule } from './cadastro-assistente-social-routing.module';
import { CadastroAssistenteSocialComponent } from './cadastro-assistente-social.component';
import { MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroAssistenteSocialComponent],
  imports: [
    CommonModule,
    CadastroAssistenteSocialRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class CadastroAssistenteSocialModule { }
