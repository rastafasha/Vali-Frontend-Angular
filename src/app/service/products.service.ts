import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Jsonp, Response } from '@angular/http';
import {Headers} from '@angular/http';
import { InfoProducto } from '../interfaces/info-producto.interface';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ServerUrl = environment.baseUrl;
  errorData: {};
  text: {};
  products:any[] = [];

  public http: HttpClient;
  public url: string;

  times:any;

  constructor(handler: HttpBackend, private jsonp: Jsonp) {
      this.http = new HttpClient(handler);
      this.times=0;
  }

  getProducts() {
    return this.http.get<Product>(this.ServerUrl + 'api_buscador/search?text=').pipe(
      catchError(this.handleError)
    );
  }





  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
}
}
