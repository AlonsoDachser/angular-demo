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
  }
}
