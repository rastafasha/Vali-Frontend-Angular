import { Injectable } from '@angular/core';
import { Calming } from '../models/calming';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalmingService {

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

  getCalmings() {
    return this.http.get<Calming>(this.ServerUrl + 'api_calming/calmings').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedCalmings() {
    return this.http.get<Calming>(this.ServerUrl + 'api_calming/featured_calmings').pipe(
      catchError(this.handleError)
    );
  }

  getCalming(id: number) {
    return this.http.get<Calming>(this.ServerUrl + 'api_calming/calmings/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentCalmings() {
    return this.http.get<Calming>(this.ServerUrl + 'api_calming/recent_calmings').pipe(
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
