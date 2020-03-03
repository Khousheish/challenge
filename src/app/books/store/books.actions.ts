import { createAction, props } from '@ngrx/store';

import { BookList } from '@Shared/interfaces/books.interface';

export enum ActionTypes {
  GET_BOOKS = '[Books] GetBooks',
  GET_BOOKS_SUCCESS = '[Books] GetBooksSuccess',
  GET_BOOKS_ERROR = '[Books] GetBooksError',
};

export const getBooks = createAction(ActionTypes.GET_BOOKS, props<{ pageIndex: number; }>());
export const getBooksSuccess = createAction(ActionTypes.GET_BOOKS_SUCCESS, props<{ payload: BookList; }>());
export const getBooksError = createAction(ActionTypes.GET_BOOKS_ERROR, props<Error>());
