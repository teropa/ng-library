import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    { name: 'On The Road', author: 'Jack Kerouac' },
    { name: 'Ham on Rye', author: 'Charles Bukowski'},
    { name: 'Naked Lunch', author: 'William S. Burroughs'}
  ];
  newBook: Book = {name: '', author: ''};

  constructor() { }

  ngOnInit() {
  }

  addNewBook() {
    this.books.push(this.newBook);
    this.newBook = {name: '', author: ''};
  }
}
