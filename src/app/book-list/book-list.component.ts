import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[];
  @Output() addBook = new EventEmitter();

  newBook: Book = {name: '', author: ''};

  constructor() { }

  ngOnInit() {
  }

  addNewBook() {
    this.addBook.next(this.newBook);
    this.newBook = {name: '', author: ''};
  }

}
