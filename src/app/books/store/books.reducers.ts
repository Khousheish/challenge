import { createReducer, on } from '@ngrx/store';
import { getBooks, getBooksError, getBooksSuccess } from './books.actions';
import { BookState } from 'src/app/shared/interfaces/books.interface';

export const initialState: BookState = {
  pending: false,
  error: null,
};

const _bookReducer = createReducer(initialState,
  on(getBooks, (state: BookState) => ({
    ...state,
    pending: true,
  })),
  on(getBooksSuccess, (state: BookState) => ({
    ...state,
    pending: true,
  })),
  on(getBooksError, (state: BookState) => ({
    ...state,
    pending: true,
  })),
);

export function bookReducer(state, action) {
  return _bookReducer(state, action);
}