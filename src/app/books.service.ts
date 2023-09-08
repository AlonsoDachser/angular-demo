import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books = [
    {id: 1, title: "Don Quijote de la Mancha", copys: 5},
    {id: 2, title: "El señor de los anillos", copys: 5}
  ];

  constructor() { }

  public getBooks():Array<{id:number, title:string, copys:number}>{
    return this.books;
  }
  public createBook(book: {id:number, title:string, copys:number}){
    this.books.push(book);
    return this.books;
  }
  public editBook(book: {id:number, title:string, copys:number}){

    const upd_obj = this.books.map(obj => {
      if (obj.id == book.id) {
       obj.title=book.title;
       obj.copys=book.copys;
      }
      return obj;
     })
    
  }
  public deleteBook(book: {id:number, title:string, copys:number}){    
   
   this.books = this.books.filter(function deleteById(element, index, array) { 
      console.log("element " + (element.id !== book.id))
      return (element.id !== book.id); 
    });

    
    
  }

  
}

  