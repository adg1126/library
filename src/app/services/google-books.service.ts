import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<any>(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .pipe(
        retry(1),
        map((book) => book.items)
      );
  }
}
