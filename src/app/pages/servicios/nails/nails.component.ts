import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.css']
})
export class NailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
