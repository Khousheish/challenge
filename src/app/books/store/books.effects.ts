import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { BooksRepository } from '../shared/books.repository';
import { Store } from '@ngrx/store';
import { getBooksSuccess, getBooksError } from './books.actions';

@Injectable()
export class BooksEffects {
  getBooks$ = createEffect(() => this.actions$.pipe(
    ofType('[Books] GetBooks'),
    switchMap(() => this.booksRepository.getBooks()),
    map(books => getBooksSuccess(books)),
    catchError((error) => of(getBooksError(error))),
  ));

  public constructor(
    private actions$: Actions,
    private store: Store<{ book: any }>,
    private booksRepository: BooksRepository,
  ) {
  }
}