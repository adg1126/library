import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBooksRoutingModule } from './my-books-routing.module';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    MyBooksRoutingModule
  ]
})
export class MyBooksModule { }
