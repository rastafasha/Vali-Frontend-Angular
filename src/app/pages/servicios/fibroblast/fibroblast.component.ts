import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibroblast',
  templateUrl: './fibroblast.component.html',
  styleUrls: ['./fibroblast.component.css']
})
export class FibroblastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
