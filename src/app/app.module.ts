import { CUSTOM_ELEMENTS_SCHEMA, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from 'src/services/typescript-angular-client';
import { enviroment } from 'src/enviroments/enviroments';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,    
    BookCreateComponent,
    BookListComponent,
    HeaderComponent,
    FooterComponent
  ],  
  providers: [
    {
    provide: BASE_PATH, useValue: enviroment.basePath
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
