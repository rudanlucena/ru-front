import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioModule } from './inicio/inicio.module';
import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    CommonModule,
    PagesRoutingModule,
    LoginModule,
    InicioModule
  ]
})
export class PagesModule { }
