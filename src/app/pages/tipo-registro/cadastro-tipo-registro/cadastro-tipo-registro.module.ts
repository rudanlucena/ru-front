import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroTipoRegistroRoutingModule } from './cadastro-tipo-registro-routing.module';
import { CadastroTipoRegistroComponent } from './cadastro-tipo-registro.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../../menu/menu.module';


@NgModule({
  declarations: [CadastroTipoRegistroComponent],
  imports: [
    MenuModule,
    CommonModule,
    CadastroTipoRegistroRoutingModule,
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
export class CadastroTipoRegistroModule { }
