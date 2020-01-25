import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tsi19Component } from './tsi19/tsi19.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'TSI2Market19',
    component: Tsi19Component
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
