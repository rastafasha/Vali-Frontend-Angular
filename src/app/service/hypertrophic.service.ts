import { Injectable } from '@angular/core';
import { Hypertrophic } from '../models/hypertrophic';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HypertrophicService {

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

  getHypertrophics() {
    return this.http.get<Hypertrophic>(this.ServerUrl + 'api_fibrohypertrophic/hypertrophics').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedHypertrophics() {
    return this.http.get<Hypertrophic>(this.ServerUrl + 'api_fibrohypertrophic/featured_hypertrophics').pipe(
      catchError(this.handleError)
    );
  }

  getHypertrophic(id: number) {
    return this.http.get<Hypertrophic>(this.ServerUrl + 'api_fibrohypertrophic/hypertrophics/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentHypertrophics() {
    return this.http.get<Hypertrophic>(this.ServerUrl + 'api_fibrohypertrophic/recent_hypertrophics').pipe(
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
