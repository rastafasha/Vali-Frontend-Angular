import { Injectable } from '@angular/core';
import { Hand } from '../models/hand';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HandService {

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

  getHands() {
    return this.http.get<Hand>(this.ServerUrl + 'api_hand/hands').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedHands() {
    return this.http.get<Hand>(this.ServerUrl + 'api_hand/featured_hands').pipe(
      catchError(this.handleError)
    );
  }

  getHand(id: number) {
    return this.http.get<Hand>(this.ServerUrl + 'api_hand/hands/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentHands() {
    return this.http.get<Hand>(this.ServerUrl + 'api_hand/recent_hands').pipe(
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
