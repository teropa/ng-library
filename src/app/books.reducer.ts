import { Action } from '@ngrx/store';
import { Book } from './book';

export interface AppState {
  books: Book[]
}

const initialState: AppState = {books: []};

export function booksReducer(state = initialState, action: Action) {
  return state;
}
