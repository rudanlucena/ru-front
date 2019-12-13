import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAssistenteSocialModule } from './cadastro-assistente-social/cadastro-assistente-social.module';
import { ListaAssistenteSocialModule } from './lista-assistente-social/lista-assistente-social.module';
import { EditarAssistenteSocialModule } from './editar-assistente-social/editar-assistente-social.module';
import { AssistenteSocialRoutingModule } from './assistente-social-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AssistenteSocialRoutingModule,
    CadastroAssistenteSocialModule,
    ListaAssistenteSocialModule,
    EditarAssistenteSocialModule,
  ]
})
export class AssistenteSocialModule { }
