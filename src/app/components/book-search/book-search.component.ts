import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchQuery: string = ''; // Stores user input for search query

  constructor(private bookService: BookService) {}

  // Emit search query
  onSearch(): void {
    this.bookService.searchBooks(this.searchQuery);
  }
}
