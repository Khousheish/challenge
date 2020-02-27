import {
  ActionReducerMap,
} from '@ngrx/store';
import { bookReducer } from '../books/store/books.reducers'

export interface State {
  books: any,
}

export const reducers: ActionReducerMap<State> = {
  books: bookReducer,
};
