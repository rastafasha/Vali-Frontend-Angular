import { Injectable } from '@angular/core';
import { Wrapping } from '../models/wrapping';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WrappingService {

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

  getWrappings() {
    return this.http.get<Wrapping>(this.ServerUrl + 'api_wrapping/wrappings').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedWrappings() {
    return this.http.get<Wrapping>(this.ServerUrl + 'api_wrapping/featured_wrappings').pipe(
      catchError(this.handleError)
    );
  }

  getWrapping(id: number) {
    return this.http.get<Wrapping>(this.ServerUrl + 'api_wrapping/wrapping/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentWrappings() {
    return this.http.get<Wrapping>(this.ServerUrl + 'api_wrapping/recent_wrappings').pipe(
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
