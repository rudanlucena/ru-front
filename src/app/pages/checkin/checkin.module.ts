import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckinRoutingModule } from './checkin-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ExibirModule } from './exibir/exibir.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    ZXingScannerModule,
    ExibirModule
  ]
})
export class CheckinModule { }
