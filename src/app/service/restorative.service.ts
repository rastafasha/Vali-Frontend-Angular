import { Injectable } from '@angular/core';
import { Restorative } from '../models/restorative';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestorativeService {

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

  getRestoratives() {
    return this.http.get<Restorative>(this.ServerUrl + 'api/restoratives').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedRestoratives() {
    return this.http.get<Restorative>(this.ServerUrl + 'api/featured_restoratives').pipe(
      catchError(this.handleError)
    );
  }

  getRestorative(id: number) {
    return this.http.get<Restorative>(this.ServerUrl + 'api/restorative/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentRestoratives() {
    return this.http.get<Restorative>(this.ServerUrl + 'api/recent_restoratives').pipe(
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
