import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Book {
  id?: string;
  title: string;
  author: string;
  image: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  booksCollection: AngularFirestoreCollection<Book>;
  firebaseBooks: Observable<any[]>;
  bookDoc: AngularFirestoreDocument<Book>;

  private books = new BehaviorSubject<any>([]);
  currentBooks$ = this.books.asObservable();

  constructor(private afs: AngularFirestore) {
    this.booksCollection = this.afs.collection('books', (ref) =>
      ref.orderBy('title', 'asc')
    );
    // this.books = this.afs.collection('books').valueChanges();
    this.firebaseBooks = this.booksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Book;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  sendToBookList(books: any) {
    this.books.next(books);
  }

  getBooks() {
    return this.firebaseBooks;
  }

  addBook(bookInfo: any) {
    this.booksCollection.add(bookInfo);
  }

  deleteBook(book: any) {
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    this.bookDoc.delete();
  }

  markAsRead(book: Book) {
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    this.bookDoc.update({ status: 'Read' });
  }

  markAsUnread(book: Book) {
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    this.bookDoc.update({ status: 'Unread' });
  }
}
