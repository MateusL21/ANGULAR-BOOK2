import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book;
  isChange : boolean = false;
  idCount : number = 1;

  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Mateus L",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Juca canalha",
      price: 50.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Juliana Silva",
      price: 53.40
    },
    {
      id: 4,
      title: "Java script 24 horas",
      author: "Antenor Lucas",
      price: 36.40
    }
  ];

  saveBook(){

    if(!this.isChange){
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isChange = false;

  }

  change(selectedbook:Book){
    this.book = selectedbook;
    this.isChange = true;
    
  }

  remove(removeBook:Book){
    this.books = this.books.filter( b => b !==removeBook)
    }


}
