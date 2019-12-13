import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarAssistenteSocialRoutingModule } from './editar-assistente-social-routing.module';
import { EditarAssistenteSocialComponent } from './editar-assistente-social.component';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarAssistenteSocialComponent],
  imports: [
    CommonModule,
    EditarAssistenteSocialRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
  ]
})
export class EditarAssistenteSocialModule { }
