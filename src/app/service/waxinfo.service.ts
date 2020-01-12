import { Injectable } from '@angular/core';
import { Waxinfo } from '../models/waxinfo';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaxinfoService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;

  description: string;
  title: string;
  button: string;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getWaxinfos() {
    return this.http.get<Waxinfo>(this.ServerUrl + 'api_wax/waxinfos').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedWaxinfos() {
    return this.http.get<Waxinfo>(this.ServerUrl + 'api_wax/featured_waxinfos').pipe(
      catchError(this.handleError)
    );
  }

  getWaxinfo(id: number) {
    return this.http.get<Waxinfo>(this.ServerUrl + 'api_wax/waxinfos/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentWaxinfos() {
    return this.http.get<Waxinfo>(this.ServerUrl + 'api_wax/recent_waxinfos').pipe(
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
