import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Page404Component } from './page404/page404.component';

const components: any = [
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
