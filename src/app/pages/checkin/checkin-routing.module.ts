import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'checkin', children: [
    {path: '', redirectTo: 'exibir', pathMatch: 'full'},
    { path: 'exibir', loadChildren: './exibir/exibir.module#ExibirModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinRoutingModule { }
