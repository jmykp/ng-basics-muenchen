import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  selectedBook: Book;

  books: Book[] = [
    { id: 1, name: 'A storm of sword', isbn: '123-4567-89' },
    { id: 2, name: 'The', isbn: '123-4567-89' },
    { id: 3, name: 'A storm of sword', isbn: '123-4567-89' },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

}
