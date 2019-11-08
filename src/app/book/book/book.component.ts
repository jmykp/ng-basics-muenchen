import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() createNewBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  createBook(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.book.id === undefined) {
      this.createNewBook.emit(this.book);
    }

    this.book = new Book();
    form.resetForm(new Book());
  }

}
