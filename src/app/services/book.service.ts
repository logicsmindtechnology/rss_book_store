import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  //private apiUrl = 'http://localhost:8080/books'; // Replace with your API URL
  private apiUrl ='https://book-store-api-b3faapeagjdchxgg.centralindia-01.azurewebsites.net/booksl='

  // Observable to share book data
  private booksSubject = new BehaviorSubject<any[]>([]);
  books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch all books initially
  loadAllBooks(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.booksSubject.next(data);
    });
  }

  // Search books by title or author
  searchBooks(query: string): void {
    if (query.trim()) {
      this.http.get<any[]>(`${this.apiUrl}/search?query=${query}`).subscribe(data => {
        this.booksSubject.next(data); // Emit search results
      });
    } else {
      this.loadAllBooks(); // Load all books if query is empty
    }
  }
}
