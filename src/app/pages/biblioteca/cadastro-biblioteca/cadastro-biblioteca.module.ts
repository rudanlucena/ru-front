import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroBibliotecaRoutingModule, ROUTES } from './cadastro-biblioteca-routing.module';
import { CadastroBibliotecaComponent } from './cadastro-biblioteca.component';
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
  declarations: [CadastroBibliotecaComponent],
  imports: [
    ROUTES,
    MenuModule,
    CommonModule,
    CadastroBibliotecaRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    CadastroBibliotecaComponent
  ]
})
export class CadastroBibliotecaModule { }
