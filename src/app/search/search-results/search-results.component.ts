import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

export interface GoogleBooksResponse {
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
}

interface Book {
  title: string;
  author: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  books = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.currentBooks$.subscribe((books) => {
      this.books = books;
    });
  }

  addBook(bookInfo: GoogleBooksResponse) {
    const book: Book = {
      title: bookInfo.title,
      author: bookInfo.authors.toString(),
      image: bookInfo.imageLinks.thumbnail,
      status: '',
    };

    this.firebaseService.addBook(book);
  }
}
