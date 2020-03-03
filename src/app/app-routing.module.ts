import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ModuleRoutes } from './shared/consts/enums/routes.enum';
import { Page404Component } from './shared/pages/page404/page404.component';
import { Module } from './shared/types/general.type';

export const routes: Routes = [
  {
    path: ModuleRoutes.Books,
    loadChildren: (): Promise<Module> => import('./books/books.module')
      .then((module: Module): Module => module.BooksModule),
  },
  {
    path: ModuleRoutes.NotFound,
    component: Page404Component,
  },
  {
    path: '',
    redirectTo: ModuleRoutes.Books,
    pathMatch: 'full',
  },
  {
    path: ModuleRoutes.Others,
    redirectTo: `${ModuleRoutes.NotFound}`,
  },
];

@NgModule()
export class AppRoutingModule {
}
