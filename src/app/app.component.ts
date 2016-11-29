import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] = [
    { name: 'On The Road', author: 'Jack Kerouac' },
    { name: 'Ham on Rye', author: 'Charles Bukowski'},
    { name: 'Naked Lunch', author: 'William S. Burroughs'}
  ];

  addBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(book: Book) {
    let idx = this.books.indexOf(book);
    if (idx >= 0) {
      this.books.splice(idx, 1);
    }
  }

}
