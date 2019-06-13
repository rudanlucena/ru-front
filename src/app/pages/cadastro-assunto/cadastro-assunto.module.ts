import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAssuntoRoutingModule } from './cadastro-assunto-routing.module';
import { CadastroAssuntoComponent } from './cadastro-assunto.component';
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from '../menu/menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroAssuntoComponent],
  imports: [
    MenuModule,
    CommonModule,
    CadastroAssuntoRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class CadastroAssuntoModule { }
