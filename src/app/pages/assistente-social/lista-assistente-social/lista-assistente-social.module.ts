import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAssistenteSocialRoutingModule } from './lista-assistente-social-routing.module';
import { ListaAssistenteSocialComponent } from './lista-assistente-social.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListaAssistenteSocialComponent],
  imports: [
    CommonModule,
    ListaAssistenteSocialRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ListaAssistenteSocialModule { }
