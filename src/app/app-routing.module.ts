import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todolist',
    pathMatch: 'full',
  },
  {
    path: 'todolist',
    loadComponent: () =>
      import('./todolist/todolist.component').then(
        (mod) => mod.TodolistComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
