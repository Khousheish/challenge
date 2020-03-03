import { A11yModule } from '@angular/cdk/a11y';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';

import { BooksGridComponent } from './books-grid/books-grid.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksRepository } from './shared/books.repository';
import { BooksEffects } from './store/books.effects';
import { BooksFacade } from './store/books.facade';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([BooksEffects]),
    BooksRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    ScrollingModule,
    MatFormFieldModule,
    A11yModule,
    CdkTableModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    ScrollingModule,
  ],
  declarations: [
    BooksGridComponent,
  ],
  providers: [
    BooksRepository,
    BooksFacade,
  ],
})
export class BooksModule {
}
