import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [NgIf]
})
export class LoaderComponent {
  loading = false;

  constructor(private loaderService: LoaderService) {
    // Subscribe to the loader state
    this.loaderService.loading$.subscribe(status => {
      this.loading = status;
    });
  }
}
