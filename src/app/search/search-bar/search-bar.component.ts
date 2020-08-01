import { FirebaseService } from './../../services/firebase.service';
import { GoogleBooksService } from './../../services/google-books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';

  constructor(
    private googleBooksService: GoogleBooksService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {}

  onFormSubmit(event: any) {
    event.preventDefault();

    this.googleBooksService.search(this.term).subscribe({
      next: (books) => {
        this.router.navigateByUrl('/search-result');
        this.firebaseService.sendToBookList(books);
      },
    });
  }
}
