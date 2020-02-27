import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BooksGridComponent } from './books-grid/books-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';
import { BooksRepository } from './shared/books.repository';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([BooksEffects]),
    BooksRoutingModule,
  ],
  declarations: [
    BooksGridComponent,
  ],
  providers: [
    BooksRepository,
  ],
})
export class BooksModule {
}
