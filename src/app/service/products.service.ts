import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpClientJsonpModule,   } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import {HttpHeaders} from '@angular/common/http';
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

  constructor(handler: HttpBackend, private jsonp: HttpClientJsonpModule) {
      this.http = new HttpClient(handler);
      this.times=0;
  }

  getProducts() {
    return this.http.get<Product>(this.ServerUrl + 'api_buscador/search?text=');
  }





  // private handleError(error: HttpErrorResponse) {
    // console.error(error);
    // return Observable.throw(error.json().error || 'Server Error');
// }
}
