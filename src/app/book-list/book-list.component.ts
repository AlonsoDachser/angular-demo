import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book : {id:any, title:any, copys:any} = {id: null, title: "", copys: 0 };
  books:any;
  selectedBook:any;
  @ViewChild('deployable')deployableRow!:ElementRef;
   

  constructor(public BooksService: BooksService,private renderer2:Renderer2) { }

  ngOnInit() {
    this.books = this.BooksService.getBooks();    
  }
  public selectBook(book:any){
    this.selectedBook = book;
  }

  public editBook(book:any){
    console.log("Llega");
   // this.renderer2.setProperty(this.deployableRow.nativeElement,'style',"display:block");
    //this.renderer2.removeStyle(this.deployableRow.nativeElement,"display");
    console.log("ale");
    this.books = this.BooksService.editBook(book);    
  }

  public saveBook(book:any){
    this.books = this.BooksService.editBook(book);    
  }

  public deleteBook(book:any){   
    console.log("AMd");
    this.books = this.BooksService.deleteBook(book);    
  }
}