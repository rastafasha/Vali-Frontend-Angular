import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifcard',
  templateUrl: './gifcard.component.html',
  styleUrls: ['./gifcard.component.css']
})
export class GifcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
