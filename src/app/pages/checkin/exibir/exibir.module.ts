import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibirRoutingModule } from './exibir-routing.module';
import { ExibirComponent } from './exibir.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [ExibirComponent],
  imports: [
    CommonModule,
    ExibirRoutingModule,
    ZXingScannerModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ]
})
export class ExibirModule { }
