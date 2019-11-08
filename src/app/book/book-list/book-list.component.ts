import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  selectedBook: Book = new Book();

  books: Book[] = [
    { id: 1, name: 'A storm of sword', isbn: '123-4567-89' },
    { id: 2, name: 'The Eye', isbn: '123-4567-89' },
    { id: 3, name: 'A storm of sword 2', isbn: '123-4567-89' },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  saveBook(book: Book) {
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
  }

}
