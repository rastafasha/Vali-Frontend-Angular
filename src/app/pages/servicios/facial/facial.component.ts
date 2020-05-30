import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['./facial.component.css']
})
export class FacialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
