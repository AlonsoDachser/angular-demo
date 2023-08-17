import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book : {id:any, title:any, copys:any} = {id: null, title: "", copys: 0 };

  constructor(public BooksService: BooksService) { }

  ngOnInit() {
  }

  createBook(){
    console.log(this.book);
    this.BooksService.createBook(this.book);
    this.book = {id: null, title: "", copys:0 };

  }
}