import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionRoutes } from './questions';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/questions/cadastrar',
    pathMatch: 'full'
  },
  ...QuestionRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
