import { Component, OnInit } from '@angular/core';
import { PermanentService } from '../../../service/permanent.service';
import { Permanent } from '../../../models/permanent';

@Component({
  selector: 'app-permanent-makeup',
  templateUrl: './permanent-makeup.component.html',
  styleUrls: ['./permanent-makeup.component.css']
})
export class PermanentMakeupComponent implements OnInit {

  permanents: Permanent;
  error: string;

  constructor(private permanentService: PermanentService) {}

  ngOnInit() {
    this.permanentService.getPermanents().subscribe(
      (data: Permanent) => this.permanents = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

}
