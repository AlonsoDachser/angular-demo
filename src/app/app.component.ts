import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book, BookControllerService, BookDTO } from 'src/services/typescript-angular-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-demo'
  books!: Book;
  constructor(
    private modalService: NgbModal, private bookService: BookControllerService) {
  }
  ngOnInit(): void {
    this.bookService.findAllUsingGET().subscribe(all => {      
      console.log(all)
    })
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
