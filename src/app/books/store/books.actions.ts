import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/interfaces/books.interface';

export const getBooks = createAction('[Books] GetBooks');
export const getBooksSuccess = createAction('[Books] GetBooksSuccess', props<{ payload: Book[]}>());
export const getBooksError = createAction('[Books] GetBooksError', props<Error>());