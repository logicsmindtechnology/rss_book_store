import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-featured-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.scss'
})
export class FeaturedBooksComponent {
  books: any[] = []; // To store the books data

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Subscribe to the observable for books data
    this.bookService.books$.subscribe(data => {
      this.books = data;
    });

    // Load all books initially
    this.bookService.loadAllBooks();
  }
}
