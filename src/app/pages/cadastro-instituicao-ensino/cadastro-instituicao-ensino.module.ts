import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroInstituicaoEnsinoRoutingModule } from './cadastro-instituicao-ensino-routing.module';
import { CadastroInstituicaoEnsinoComponent } from './cadastro-instituicao-ensino.component';
import { MenuModule } from '../menu/menu.module';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroInstituicaoEnsinoComponent],
  imports: [
    MenuModule,
    CommonModule,
    CadastroInstituicaoEnsinoRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class CadastroInstituicaoEnsinoModule { }
