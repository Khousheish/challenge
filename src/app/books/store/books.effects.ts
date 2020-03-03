import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { BookList } from '@Shared/interfaces/books.interface';

import { BooksRepository } from '../shared/books.repository';
import { getBooks, getBooksError, getBooksSuccess } from './books.actions';

@Injectable()
export class BooksEffects {
  public getBooks$ = createEffect(() => this.actions$
    .pipe(
      ofType(getBooks),
      switchMap((action) => this.booksRepository.getBooks(action.pageIndex)),
      map((books: BookList) => getBooksSuccess({payload: books})),
      catchError((error: HttpErrorResponse) => of(getBooksError(error))),
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly booksRepository: BooksRepository,
  ) {
  }
}