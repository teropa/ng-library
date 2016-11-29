import { Action } from '@ngrx/store';
import { fromJS, Map } from 'immutable';
import { Book } from './book';

export type AppState = Map<string, any>;

export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const MARK_AS_READ = 'MARK_AS_READ';

const initialState: AppState = fromJS({
  books: [
    { name: 'On The Road', author: 'Jack Kerouac' },
    { name: 'Ham on Rye', author: 'Charles Bukowski'},
    { name: 'Naked Lunch', author: 'William S. Burroughs'}
  ]
});

export function booksReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.update('books', b => b.push(Map(action.payload)));
    case DELETE_BOOK:
      return state.update('books', b => b.delete(b.indexOf(action.payload)));
    case MARK_AS_READ:
      const idx = state.get('books').indexOf(action.payload);
      return state.setIn(['books', idx, 'read'], true);
    default: return state;
  }
}
