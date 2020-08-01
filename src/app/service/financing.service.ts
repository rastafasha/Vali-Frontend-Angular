import { Injectable } from '@angular/core';
import { Financing } from '../models/financing';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

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

  getFinancings() {
    return this.http.get<Financing>(this.ServerUrl + 'api_financing/financings').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedFinancings() {
    return this.http.get<Financing>(this.ServerUrl + 'api_financing/featured_financings').pipe(
      catchError(this.handleError)
    );
  }

  getFinancing(id: number) {
    return this.http.get<Financing>(this.ServerUrl + 'api_financing/financing/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentFinancings() {
    return this.http.get<Financing>(this.ServerUrl + 'api_financing/recent_financings').pipe(
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
