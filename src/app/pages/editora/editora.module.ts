import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoraRoutingModule } from './editora-routing.module';
import { CadastroEditoraModule } from './cadastro-editora/cadastro-editora.module';
import { ListaEditoraModule } from './lista-editora/lista-editora.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditoraRoutingModule,
    CadastroEditoraModule,
    ListaEditoraModule
  ]
})
export class EditoraModule { }
