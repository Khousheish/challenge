import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ModuleRoutes } from './shared/consts/enums/routes.enum';
import { Module } from './shared/types/general.type';
import { BooksGridResolver } from './books/books-grid/books-grid.resolver';
import { Page404Component } from './shared/pages/page404/page404.component';

export const routes: Routes = [
  {
    path: ModuleRoutes.Books,
    loadChildren: (): Promise<Module> => import('./books/books.module')
      .then((module: Module): Module => module.BooksModule),
    // resolve: {
    //   populateBooks: BooksGridResolver,
    // },
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
