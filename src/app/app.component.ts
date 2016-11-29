import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, ADD_BOOK, DELETE_BOOK, MARK_AS_READ } from './books.reducer';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books$ = this.store.select(s => s.get('books'));

  constructor(private store: Store<AppState>) { }

  addBook(book: Book) {
    this.store.dispatch({type: ADD_BOOK, payload: book});
  }

  markAsRead(book: Book) {
    this.store.dispatch({type: MARK_AS_READ, payload: book});
  }

  deleteBook(book: Book) {
    this.store.dispatch({type: DELETE_BOOK, payload: book});
  }

}
