import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroEditoraRoutingModule } from './cadastro-editora-routing.module';
import { CadastroEditoraComponent } from './cadastro-editora.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../../menu/menu.module';

@NgModule({
  declarations: [CadastroEditoraComponent],
  imports: [
    MenuModule,
    CommonModule,
    CadastroEditoraRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ]
  ,
  exports:[
    CadastroEditoraComponent
  ]
})
export class CadastroEditoraModule { }
