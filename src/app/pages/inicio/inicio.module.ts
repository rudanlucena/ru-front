import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MenuModule } from '../menu/menu.module';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    MenuModule,
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class InicioModule { }
