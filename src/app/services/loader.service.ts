import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show(): void {
    console.log('Loader: SHOW'); // Debugging log
    this.loadingSubject.next(true); // Show loader
  }

  hide(): void {
    console.log('Loader: HIDE');
    this.loadingSubject.next(false); // Hide loader
  }
}
