import { Component, OnInit  } from '@angular/core';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {  

  
  book : {id:any, title:any, copys:any} = {id: null, title: "", copys: 0 };
  bookCreated : {id:any, title:any, copys:any} = {id: null, title: "", copys: 0 };
  books:any;  
  selectedBook:any;
  crear!: boolean;
  
  constructor(public BooksService: BooksService) { }
  ngOnInit() {
    this.books = this.BooksService.getBooks();    
    this.crear=false;    
    
  }
  public selectBook(book: {id:any, title:any, copys:any}){
    this.selectedBook = book;
  }
  public editBook(book: {id:any, title:any, copys:any}){
    
    this.books = this.BooksService.editBook(book);    
    this.ngOnInit();
  }
  public saveBook(book: {id:any, title:any, copys:any}){
    this.crear=!this.crear;
   this.books = this.BooksService.createBook(book);  
   this.book = {id: null, title: "", copys:0 };
   
  }

  public deleteBook(book:any){       
    this.books = this.BooksService.deleteBook(book);    
    this.books =  this.books = this.BooksService.getBooks();
    this.ngOnInit();    
  }

  public createButton(){
    this.crear=!this.crear;
    this.books = this.BooksService.getBooks();
    this.bookCreated.id=undefined;
    this.bookCreated.title=undefined;
    this.bookCreated.copys=undefined;
    

    
  }
}