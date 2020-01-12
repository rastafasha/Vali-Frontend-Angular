import { Injectable } from '@angular/core';
import { Permanent } from '../models/permanent';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermanentService {

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

  getPermanents() {
    return this.http.get<Permanent>(this.ServerUrl + 'api_permanent/permanents').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedPermanents() {
    return this.http.get<Permanent>(this.ServerUrl + 'api_permanent/featured_permanents').pipe(
      catchError(this.handleError)
    );
  }

  getPermanent(id: number) {
    return this.http.get<Permanent>(this.ServerUrl + 'api_permanent/permanents/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentPermanents() {
    return this.http.get<Permanent>(this.ServerUrl + 'api_permanent/recent_permanents').pipe(
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
