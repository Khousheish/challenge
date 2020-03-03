import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { Page404Component } from './page404/page404.component';

const components = [
  Page404Component,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class PagesModule {
}
