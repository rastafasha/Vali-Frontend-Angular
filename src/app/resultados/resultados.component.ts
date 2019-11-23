import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductService } from '../service/products.service';
import { Product } from '../models/product';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;

  text=[];

  products: Product;
  error: string;
  buscar:string = "";

  product;


  type: string;
    title: string;
    description: string;
    price: string;
    popup: string;
    button: string;
    image: string;

  constructor(
    public activateRoute: ActivatedRoute,
    public http: HttpClient,
    public productsService: ProductService,
    
  ) {

    activateRoute.params
    .subscribe( params => {
      let text = params['text'];
      this.search(text);
    })
   }

  ngOnInit() {
   
  }

  /*search( product: string) {

    let url = this.ServerUrl + 'api/search/' + product;
    
    
    this.http.get(url)
    .subscribe( (resp: any) =>{
      //return this.http.get(text);
      //this.products = resp.product
      this.product=resp.product;
      console.log(resp)
      return product;
    }); // funciona, pero solo devuelve todo



  }*/

  search( text: string) {// funciona, devuelve la busqueda


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api/search?text=' + text )
      .toPromise()
      .then(product=>{
        this.product= {'results': JSON.stringify(product, null),
        
        'json': ()=>{
          return product;
        }
        
      };
      //this.product= product
      //console.log("Mostrando resultado final:");
      //console.log(product);

      // devolver el array     
      const mapped = Object.keys(product)
      .map(key => ({type: key, value: product[key]}));

      
      
      //console.log(product);
      this.product = product;

      });
      
  }


}

