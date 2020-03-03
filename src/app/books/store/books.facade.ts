import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { BookList, BookState } from '@Shared/interfaces/books.interface';

import { selectors, State } from '../../app.store';
import { getBooks } from './books.actions';

@Injectable()
export class BooksFacade {
  public booksState$: Observable<BookState> = this.store
    .pipe(
      shareReplay(1),
      select(selectors.selectBooksState),
    );

  public booksPending$: Observable<boolean> = this.store
    .pipe(
      shareReplay(1),
      select(selectors.selectBooksPending),
    );

  public booksList$: Observable<BookList> = this.store
    .pipe(
      shareReplay(1),
      select(selectors.selectBooks),
    );

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public getBooks(pageIndex: number): void {
    this.store.dispatch(getBooks({ pageIndex }));
  }
}
