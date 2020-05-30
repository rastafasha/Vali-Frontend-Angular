import { Component, OnInit } from '@angular/core';
import { WaxService } from '../../../service/wax.service';
import { Wax } from '../../../models/wax';



@Component({
  selector: 'app-wax',
  templateUrl: './wax.component.html',
  styleUrls: ['./wax.component.css']
})
export class WaxComponent implements OnInit {

  waxs: Wax;
  error: string;

  constructor(private waxService: WaxService) {}

  ngOnInit() {
    
    this.waxService.getWaxs().subscribe(
      (data: Wax) => this.waxs = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }
}
