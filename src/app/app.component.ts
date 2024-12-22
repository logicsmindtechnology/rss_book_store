import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FeaturedBooksComponent } from './components/featured-books/featured-books.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './utilitycomponents/loader/loader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BookSearchComponent,
    FeaturedBooksComponent,
    FooterComponent,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-store';
}
