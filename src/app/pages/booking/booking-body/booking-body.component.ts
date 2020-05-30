import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-body',
  templateUrl: './booking-body.component.html',
  styleUrls: ['./booking-body.component.css']
})
export class BookingBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
