import { Injectable } from '@angular/core';
import { Specialf } from '../models/specialf';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialfService {

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

  getSpecialfs() {
    return this.http.get<Specialf>(this.ServerUrl + 'api_fspecial/specialfs').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedSpecialfs() {
    return this.http.get<Specialf>(this.ServerUrl + 'api_fspecial/featured_specialfs').pipe(
      catchError(this.handleError)
    );
  }

  getSpecialf(id: number) {
    return this.http.get<Specialf>(this.ServerUrl + 'api_fspecial/specialf/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentSpecialfs() {
    return this.http.get<Specialf>(this.ServerUrl + 'api_fspecial/recent_specialfs').pipe(
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
