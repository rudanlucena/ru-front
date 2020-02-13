import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAlunoRoutingModule, ROUTES } from './cadastro-aluno-routing.module';
import { CadastroAlunoComponent } from './cadastro-aluno.component';
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from '../../menu/menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [CadastroAlunoComponent],
  imports: [
    ROUTES,
    MenuModule,
    CommonModule,
    CadastroAlunoRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports:[
    CadastroAlunoComponent
  ]
})
export class CadastroAlunoModule { }
