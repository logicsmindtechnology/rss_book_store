import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

export const httpInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const loaderService = inject(LoaderService); // Inject LoaderService directly

  // Show loader before request starts
  loaderService.show();

  return next(req).pipe(
    finalize(() => {
      // Hide loader after request completes
      loaderService.hide();
    })
  );
};
