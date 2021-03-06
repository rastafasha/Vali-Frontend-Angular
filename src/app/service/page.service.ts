import { Injectable } from '@angular/core';
import { Page } from '../models/page';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;

  price: string;
  description: string;
  title: string;
  button: string;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getPages() {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/pages').pipe(
      catchError(this.handleError)
    );
  }

  getMembership() {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/membership').pipe(
      catchError(this.handleError)
    );
  }

  getFranchise() {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/franchise').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedPages() {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/featured_pages').pipe(
      catchError(this.handleError)
    );
  }

  getPage(id: number) {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/page/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentPages() {
    return this.http.get<Page>(this.ServerUrl + 'api_pages/recent_pages').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
