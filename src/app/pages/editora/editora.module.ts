import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoraRoutingModule } from './editora-routing.module';
import { CadastroEditoraModule } from './cadastro-editora/cadastro-editora.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditoraRoutingModule,
    CadastroEditoraModule
  ]
})
export class EditoraModule { }
