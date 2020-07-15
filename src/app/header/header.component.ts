import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public activeLang = 'en';

  flag = false;


  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
    this.flag = true;
  }
  buscar_producto( termino: string ) {

    console.log( termino );
    this.router.navigate( [ 'buscar', termino ]);

  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }





}
