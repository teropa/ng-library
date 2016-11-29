import { Action } from '@ngrx/store';
import { Book } from './book';

export interface AppState {
  books: Book[]
}

export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const MARK_AS_READ = 'MARK_AS_READ';

const initialState: AppState = {
  books: [
    { name: 'On The Road', author: 'Jack Kerouac' },
    { name: 'Ham on Rye', author: 'Charles Bukowski'},
    { name: 'Naked Lunch', author: 'William S. Burroughs'}
  ]
};

export function booksReducer(state = initialState, action: Action) {
  const books = state.books;
  switch (action.type) {
    case ADD_BOOK:
      const newBook = action.payload;
      return Object.assign({}, state, {books: books.concat(newBook)})
    case DELETE_BOOK:
      const deletedBook = action.payload;
      return Object.assign({}, state, {books: books.filter(b => b !== deletedBook)});
    case MARK_AS_READ:
      const book = action.payload;
      return Object.assign({}, state, {
        books: books.map(b => {
          if (b === book) {
            return Object.assign({}, b, {read: true});
          } else {
            return b;
          }
        });
      });
    default: return state;
  }
}
