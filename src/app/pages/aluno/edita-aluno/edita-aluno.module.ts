import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditaAlunoRoutingModule } from './edita-aluno-routing.module';
import { EditaAlunoComponent } from './edita-aluno.component';
import { WebcamModule } from 'ngx-webcam';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [EditaAlunoComponent],
  imports: [
    CommonModule,
    EditaAlunoRoutingModule,
    WebcamModule,
    MatButtonModule
  ]
})
export class EditaAlunoModule { }
