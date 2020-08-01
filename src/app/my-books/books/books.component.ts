import { FirebaseService, Book } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  deleteBook(event, book) {
    this.firebaseService.deleteBook(book);
  }

  markAsRead(event, book) {
    this.firebaseService.markAsRead(book);
  }

  markAsUnread(event, book) {
    this.firebaseService.markAsUnread(book);
  }
}
