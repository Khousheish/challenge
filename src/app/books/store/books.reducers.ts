import { createReducer, on } from '@ngrx/store';

import { BookState } from '@Shared/interfaces/books.interface';

import { getBooks, getBooksError, getBooksSuccess } from './books.actions';

export const initialState: BookState = {
  list: {
    kind: '',
    totalItems: 0,
    items: [],
  },
  pending: false,
  error: null,
};

const _bookReducer = createReducer(
  initialState,
  on(getBooks, (state: BookState) => ({
    ...state,
    pending: true,
  })),
  on(getBooksSuccess, (state: BookState, { payload }) => ({
    ...state,
    list: payload,
    pending: false,
  })),
  on(getBooksError, (state: BookState) => ({
    ...state,
    pending: false,
  })),
);

export function bookReducer(state: BookState, action) {
  return _bookReducer(state, action);
}
