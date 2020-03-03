import { ActionReducerMap } from '@ngrx/store';

import { bookReducer } from '@Books/store/books.reducers';
import { BookList, BookState } from '@Shared/interfaces/books.interface';

export interface State {
  books: BookState;
}

// tslint:disable-next-line:no-any todo: fix
export const selectors: any = {
  selectBooksState: (state: State): BookState => state.books,
  selectBooks: (state: State): BookList => state.books.list,
  selectBooksPending: (state: State): boolean => state.books.pending,
};

export const reducers: ActionReducerMap<State> = {
  books: bookReducer,
};
