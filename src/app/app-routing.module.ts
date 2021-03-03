import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'editar/:id', loadChildren: './pages/nutricionista/nutricionista.module#NutricionistaModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'aluno', loadChildren: './pages/aluno/aluno.module#AlunoModule' },
  { path: 'relatorio', loadChildren: './pages/relatorio/relatorio.module#RelatorioModule' },
  { path: 'checkin', loadChildren: './pages/checkin/checkin.module#CheckinModule' },
  { path: 'auxilio', loadChildren: './pages/auxilio/auxilio.module#AuxilioModule' },
  { path: 'horario', loadChildren: './pages/horario/horario.module#HorarioModule' },
  { path: 'assistente-social', loadChildren: './pages/assistente-social/assistente-social.module#AssistenteSocialModule' },
  { path: 'nutricionista', loadChildren: './pages/nutricionista/nutricionista.module#NutricionistaModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
